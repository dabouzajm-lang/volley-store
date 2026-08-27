import {
    useContext,
    useState
} from "react";

import {
    addDoc,
    collection,
    serverTimestamp
} from "firebase/firestore";

import { Link } from "react-router-dom";

import { db } from "../../firebase";

import { CartContext } from "../../context/CartContext";

import formatPrice from "../../utils/formatPrice";

import "./Checkout.css";


function Checkout() {

    const {
        cart,
        clearCart,
        getTotalQuantity,
        getTotal
    } = useContext(CartContext);


    const [formData, setFormData] =
        useState({
            name: "",
            phone: "",
            email: ""
        });


    const [loading, setLoading] =
        useState(false);


    const [orderId, setOrderId] =
        useState(null);


    const [error, setError] =
        useState("");


    const total =
        getTotal();


    const totalQuantity =
        getTotalQuantity();


    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;


        setFormData({
            ...formData,
            [name]: value
        });

    };


    const handleSubmit = async (event) => {

        event.preventDefault();


        if (cart.length === 0) {

            setError(
                "No podés generar una orden con el carrito vacío."
            );

            return;

        }


        setLoading(true);

        setError("");


        try {

            const order = {

                buyer: {

                    name:
                        formData.name,

                    phone:
                        formData.phone,

                    email:
                        formData.email

                },


                items: cart.map(
                    (item) => ({

                        id:
                            item.id,

                        name:
                            item.name,

                        price:
                            item.price,

                        quantity:
                            item.quantity

                    })
                ),


                total,

                date:
                    serverTimestamp()

            };


            const ordersCollection =
                collection(
                    db,
                    "orders"
                );


            const orderReference =
                await addDoc(
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
                "No pudimos procesar la compra. Intentá nuevamente."
            );

        } finally {

            setLoading(false);

        }

    };


    /*
     * COMPRA EXITOSA
     */

    if (orderId) {

        return (

            <main className="checkout-page checkout-page--success">

                <div className="container">

                    <section className="checkout-success">

                        <div className="checkout-success__icon">
                            ✓
                        </div>


                        <span className="checkout-success__eyebrow">
                            COMPRA CONFIRMADA
                        </span>


                        <h1>

                            Gracias por tu compra,

                            <span>
                                {" "}
                                {formData.name}.
                            </span>

                        </h1>


                        <p>

                            Tu orden fue registrada correctamente
                            en nuestro sistema.

                        </p>


                        <div className="checkout-success__order">

                            <span>
                                ID DE ORDEN
                            </span>

                            <strong>
                                {orderId}
                            </strong>

                        </div>


                        <div className="checkout-success__actions">

                            <Link
                                to="/productos"
                                className="checkout-success__primary"
                            >
                                Seguir comprando
                            </Link>


                            <Link
                                to="/"
                                className="checkout-success__secondary"
                            >
                                Volver al inicio
                            </Link>

                        </div>

                    </section>

                </div>

            </main>

        );

    }


    /*
     * CARRITO VACÍO
     */

    if (cart.length === 0) {

        return (

            <main className="checkout-page checkout-page--empty">

                <div className="container">

                    <section className="checkout-empty">

                        <span className="checkout-empty__eyebrow">
                            CHECKOUT
                        </span>


                        <h1>
                            No hay productos para comprar.
                        </h1>


                        <p>

                            Agregá productos al carrito
                            antes de iniciar una compra.

                        </p>


                        <Link
                            to="/productos"
                            className="checkout-empty__button"
                        >
                            Explorar productos
                        </Link>

                    </section>

                </div>

            </main>

        );

    }


    /*
     * CHECKOUT
     */

    return (

        <main className="checkout-page">

            <div className="container">

                <header className="checkout-page__header">

                    <span className="checkout-page__eyebrow">
                        ÚLTIMO PASO
                    </span>


                    <h1>
                        Finalizá tu compra
                    </h1>


                    <p>
                        Completá tus datos para generar la orden.
                    </p>

                </header>


                <div className="checkout-layout">

                    {/* Formulario */}

                    <section className="checkout-form">

                        <div className="checkout-form__header">

                            <span>
                                01
                            </span>


                            <div>

                                <h2>
                                    Datos del comprador
                                </h2>

                                <p>

                                    Usaremos estos datos para
                                    registrar tu compra.

                                </p>

                            </div>

                        </div>


                        {error && (

                            <div
                                className="checkout-form__error"
                                role="alert"
                            >
                                {error}
                            </div>

                        )}


                        <form onSubmit={handleSubmit}>

                            <div className="checkout-field">

                                <label htmlFor="name">
                                    Nombre completo
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Juan Pérez"
                                    autoComplete="name"
                                    required
                                />

                            </div>


                            <div className="checkout-field">

                                <label htmlFor="phone">
                                    Teléfono
                                </label>

                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="11 2345 6789"
                                    autoComplete="tel"
                                    required
                                />

                            </div>


                            <div className="checkout-field">

                                <label htmlFor="email">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="nombre@email.com"
                                    autoComplete="email"
                                    required
                                />

                            </div>


                            <button
                                type="submit"
                                className="checkout-form__submit"
                                disabled={loading}
                            >

                                {loading
                                    ? "Procesando compra..."
                                    : "Confirmar compra"
                                }

                            </button>

                        </form>


                        <p className="checkout-form__security">

                            Tus datos se utilizan únicamente
                            para procesar esta orden.

                        </p>

                    </section>


                    {/* Resumen */}

                    <aside className="checkout-summary">

                        <div className="checkout-summary__header">

                            <span>
                                02
                            </span>


                            <div>

                                <h2>
                                    Tu pedido
                                </h2>


                                <p>

                                    {totalQuantity}{" "}

                                    {totalQuantity === 1
                                        ? "producto"
                                        : "productos"
                                    }

                                </p>

                            </div>

                        </div>


                        <div className="checkout-summary__items">

                            {cart.map((item) => (

                                <article
                                    className="checkout-summary__item"
                                    key={item.id}
                                >

                                    <div className="checkout-summary__image">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                    </div>


                                    <div className="checkout-summary__item-info">

                                        <strong>
                                            {item.name}
                                        </strong>

                                        <span>
                                            Cantidad:{" "}
                                            {item.quantity}
                                        </span>

                                    </div>


                                    <span className="checkout-summary__item-price">

                                        {formatPrice(
                                            item.price *
                                            item.quantity
                                        )}

                                    </span>

                                </article>

                            ))}

                        </div>


                        <div className="checkout-summary__totals">

                            <div>

                                <span>
                                    Subtotal
                                </span>

                                <strong>

                                    {formatPrice(
                                        total
                                    )}

                                </strong>

                            </div>


                            <div>

                                <span>
                                    Envío
                                </span>

                                <strong className="checkout-summary__shipping">
                                    A calcular
                                </strong>

                            </div>

                        </div>


                        <div className="checkout-summary__total">

                            <span>
                                Total
                            </span>

                            <strong>

                                {formatPrice(
                                    total
                                )}

                            </strong>

                        </div>


                        <Link
                            to="/cart"
                            className="checkout-summary__back"
                        >
                            ← Volver al carrito
                        </Link>

                    </aside>

                </div>

            </div>

        </main>

    );

}


export default Checkout;