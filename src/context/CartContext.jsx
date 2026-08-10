import { createContext, useState } from "react";

export const CartContext = createContext();


function CartProvider({ children }) {

    const [cart, setCart] = useState([]);


    // Agregar producto al carrito
    const addItem = (product, quantity) => {

        const productInCart = cart.find(
            (item) => item.id === product.id
        );


        if (productInCart) {

            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + quantity
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

    };


    // Cantidad total de unidades
    const getTotalQuantity = () => {

        return cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

    };


    // Eliminar un producto completo
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