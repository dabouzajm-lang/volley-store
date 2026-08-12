import { createContext, useState } from "react";


export const CartContext = createContext();


function CartProvider({ children }) {

    const [cart, setCart] = useState([]);


    // Agregar producto al carrito
    const addItem = (product, quantity) => {

        const productInCart = cart.find(
            (item) => item.id === product.id
        );


        // Cantidad que ya tenemos en el carrito
        const currentQuantity = productInCart
            ? productInCart.quantity
            : 0;


        // Nueva cantidad total
        const newQuantity = currentQuantity + quantity;


        // Verificar stock
        if (newQuantity > product.stock) {

            console.warn(
                "No hay suficiente stock disponible."
            );

            return false;

        }


        // Si el producto ya existe
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

            // Si es un producto nuevo
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


    // Cantidad total de unidades
    const getTotalQuantity = () => {

        return cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

    };


    // Eliminar producto completo
    const removeItem = (id) => {

        setCart(

            cart.filter(
                (item) => item.id !== id
            )

        );

    };


    // Vaciar carrito
    const clearCart = () => {

        setCart([]);

    };


    return (

        <CartContext.Provider
            value={{
                cart,
                addItem,
                getTotalQuantity,
                removeItem,
                clearCart
            }}
        >

            {children}

        </CartContext.Provider>

    );

}


export default CartProvider;