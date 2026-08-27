import { useContext } from "react";

import { Link } from "react-router-dom";

import {
    FaShoppingBag,
    FaLock
} from "react-icons/fa";

import { CartContext } from "../../context/CartContext";

import formatPrice from "../../utils/formatPrice";

import "./Cart.css";


function Cart() {

    const {
        cart,
        removeItem,
        clearCart,
        getTotalQuantity,
        getTotal
    } = useContext(CartContext);


    const total =
        getTotal();


    const totalQuantity =
        getTotalQuantity();


    if (cart.length === 0) {

        return (

            <main className="cart-page cart-page--empty">

                <div className="container">

                    <div className="empty-cart">

                        <div className="empty-cart__icon">

                            <FaShoppingBag />

                        </div>


                        <span className="empty-cart__eyebrow">
                            TU CARRITO
                        </span>


                        <h1>
                            Todavía no agregaste productos.
                        </h1>


                        <p>

                            Explorá nuestro catálogo y encontrá
                            el equipamiento ideal para tu juego.

                        </p>


                        <Link
                            to="/productos"
                            className="empty-cart__button"
                        >
                            Explorar productos
                        </Link>

                    </div>

                </div>

            </main>

        );

    }


    return (

        <main className="cart-page">

            <div className="container">

                {/* Header */}

                <header className="cart-page__header">

                    <div>

                        <span className="cart-page__eyebrow">
                            TU COMPRA
                        </span>


                        <h1>
                            Carrito
                        </h1>


                        <p>

                            {totalQuantity}{" "}

                            {totalQuantity === 1
                                ? "producto"
                                : "productos"
                            }{" "}

                            en tu carrito.

                        </p>

                    </div>


                    <button
                        type="button"
                        className="cart-page__clear"
                        onClick={clearCart}
                    >
                        Vaciar carrito
                    </button>

                </header>


                <div className="cart-layout">

                    {/* Productos */}

                    <section className="cart-products">

                        {cart.map((item) => (

                            <article
                                className="cart-item"
                                key={item.id}
                            >

                                <Link
                                    to={`/item/${item.id}`}
                                    className="cart-item__image-wrapper"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item__image"
                                    />

                                </Link>


                                <div className="cart-item__info">

                                    <span className="cart-item__category">

                                        {item.category}

                                    </span>


                                    <Link
                                        to={`/item/${item.id}`}
                                        className="cart-item__name"
                                    >

                                        {item.name}

                                    </Link>


                                    <p className="cart-item__unit-price">

                                        Precio unitario:{" "}

                                        {formatPrice(
                                            item.price
                                        )}

                                    </p>


                                    <div className="cart-item__meta">

                                        <span>

                                            Cantidad

                                            <strong>
                                                {item.quantity}
                                            </strong>

                                        </span>


                                        <span>

                                            Subtotal

                                            <strong>

                                                {formatPrice(
                                                    item.price *
                                                    item.quantity
                                                )}

                                            </strong>

                                        </span>

                                    </div>


                                    <button
                                        type="button"
                                        className="cart-item__remove"
                                        onClick={() =>
                                            removeItem(item.id)
                                        }
                                    >
                                        Eliminar producto
                                    </button>

                                </div>

                            </article>

                        ))}

                    </section>


                    {/* Resumen */}

                    <aside className="cart-summary">

                        <span className="cart-summary__eyebrow">
                            RESUMEN
                        </span>


                        <h2>
                            Resumen de compra
                        </h2>


                        <div className="cart-summary__rows">

                            <div className="cart-summary__row">

                                <span>
                                    Productos
                                </span>

                                <strong>
                                    {totalQuantity}
                                </strong>

                            </div>


                            <div className="cart-summary__row">

                                <span>
                                    Subtotal
                                </span>

                                <strong>

                                    {formatPrice(
                                        total
                                    )}

                                </strong>

                            </div>


                            <div className="cart-summary__row">

                                <span>
                                    Envío
                                </span>

                                <strong className="cart-summary__free">
                                    A calcular
                                </strong>

                            </div>

                        </div>


                        <div className="cart-summary__total">

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
                            to="/checkout"
                            className="cart-summary__checkout"
                        >
                            Finalizar compra
                        </Link>


                        <Link
                            to="/productos"
                            className="cart-summary__continue"
                        >
                            ← Seguir comprando
                        </Link>


                        <div className="cart-summary__security">

                            <span>
                                <FaLock />
                            </span>

                            <p>
                                Compra segura y protegida.
                            </p>

                        </div>

                    </aside>

                </div>

            </div>

        </main>

    );

}


export default Cart;