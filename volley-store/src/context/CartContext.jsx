import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

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


    return (
        <CartContext.Provider
            value={{
                cart,
                addItem
            }}
        >
            {children}
        </CartContext.Provider>
    );

}

export default CartProvider;