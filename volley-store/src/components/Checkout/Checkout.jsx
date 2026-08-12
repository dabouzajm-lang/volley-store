import { useContext, useState } from "react";

import {
    addDoc,
    collection,
    serverTimestamp
} from "firebase/firestore";

import { db } from "../../firebase";

import { CartContext } from "../../context/CartContext";


function Checkout() {

    const {
        cart,
        clearCart
    } = useContext(CartContext);


    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });


    const [loading, setLoading] = useState(false);

    const [orderId, setOrderId] = useState(null);

    const [error, setError] = useState("");


    const handleChange = (event) => {

        const { name, value } = event.target;


        setFormData({
            ...formData,
            [name]: value
        });

    };


    const getTotal = () => {

        return cart.reduce(

            (total, item) =>
                total + item.price * item.quantity,

            0

        );

    };


    const handleSubmit = async (event) => {

        event.preventDefault();


        if (cart.length === 0) {

            setError(
                "El carrito está vacío."
            );

            return;

        }


        setLoading(true);

        setError("");


        try {

            const order = {

                buyer: {

                    name: formData.name,

                    phone: formData.phone,

                    email: formData.email

                },


                items: cart.map((item) => ({

                    id: item.id,

                    name: item.name,

                    price: item.price,

                    quantity: item.quantity

                })),


                total: getTotal(),

                date: serverTimestamp()

            };


            const ordersCollection = collection(
                db,
                "orders"
            );


            const orderReference = await addDoc(
                ordersCollection,
                order
            );


            setOrderId(
                orderReference.id
            );


            clearCart();


        } catch (error) {

            console.error(
                "Error creando la orden:",
                error
            );


            setError(
                "Ocurrió un error al procesar la compra. Intentá nuevamente."
            );

        } finally {

            setLoading(false);

        }

    };


    if (orderId) {

        return (

            <div className="container mt-5 text-center">

                <h2 className="text-success">
                    ¡Compra realizada con éxito!
                </h2>


                <p className="mt-4">
                    Gracias por tu compra,{" "}
                    <strong>
                        {formData.name}
                    </strong>.
                </p>


                <p>
                    Tu número de orden es:
                </p>


                <h3>
                    {orderId}
                </h3>


                <p className="mt-3">
                    Guardá este ID para consultar
                    tu compra.
                </p>

            </div>

        );

    }


    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Checkout
            </h2>


            {error && (

                <div className="alert alert-danger">
                    {error}
                </div>

            )}


            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label
                        htmlFor="name"
                        className="form-label"
                    >
                        Nombre
                    </label>


                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                </div>


                <div className="mb-3">

                    <label
                        htmlFor="phone"
                        className="form-label"
                    >
                        Teléfono
                    </label>


                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                </div>


                <div className="mb-3">

                    <label
                        htmlFor="email"
                        className="form-label"
                    >
                        Email
                    </label>


                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                </div>


                <div className="mb-4">

                    <h4>
                        Total: ${getTotal()}
                    </h4>

                </div>


                <button
                    type="submit"
                    className="btn btn-success"
                    disabled={loading}
                >

                    {loading
                        ? "Procesando compra..."
                        : "Confirmar compra"
                    }

                </button>

            </form>

        </div>

    );

}


export default Checkout;