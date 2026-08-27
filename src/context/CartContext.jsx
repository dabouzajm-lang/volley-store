import {
    createContext,
    useState
} from "react";


export const CartContext = createContext();


function CartProvider({ children }) {

    const [cart, setCart] = useState([]);


    /*
     * Agrega un producto al carrito.
     *
     * También verifica la cantidad que ya
     * existe para evitar superar el stock.
     */

    const addItem = (product, quantity) => {

        const productInCart = cart.find(
            (item) => item.id === product.id
        );


        const currentQuantity =
            productInCart
                ? productInCart.quantity
                : 0;


        const newQuantity =
            currentQuantity + quantity;


        if (newQuantity > product.stock) {

            console.warn(
                "No hay suficiente stock disponible."
            );

            return false;

        }


        if (productInCart) {

            setCart(

                cart.map((item) =>

                    item.id === product.id

                        ? {
                            ...item,
                            quantity: newQuantity
                        }

                        : item

                )

            );

        } else {

            setCart([

                ...cart,

                {
                    ...product,
                    quantity
                }

            ]);

        }


        return true;

    };


    /*
     * Elimina completamente un producto
     * según su ID.
     */

    const removeItem = (id) => {

        setCart(

            cart.filter(
                (item) => item.id !== id
            )

        );

    };


    /*
     * Vacía todo el carrito.
     */

    const clearCart = () => {

        setCart([]);

    };


    /*
     * Cantidad total de unidades.
     *
     * Ejemplo:
     *
     * Pelota x2
     * Rodilleras x1
     *
     * Resultado: 3
     */

    const getTotalQuantity = () => {

        return cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    };


    /*
     * Precio total del carrito.
     *
     * Centralizamos este cálculo para que
     * Cart y Checkout utilicen exactamente
     * la misma lógica.
     */

    const getTotal = () => {

        return cart.reduce(
            (total, item) =>
                total +
                item.price * item.quantity,
            0
        );

    };


    return (

        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                getTotalQuantity,
                getTotal
            }}
        >

            {children}

        </CartContext.Provider>

    );

}


export default CartProvider;