import {
    useContext,
    useState
} from "react";

import { Link } from "react-router-dom";

import {
    FaTruck,
    FaLock
} from "react-icons/fa";

import { CartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";

import formatPrice from "../../utils/formatPrice";

import "./ItemDetail.css";


function ItemDetail({ product }) {

    const { addItem } =
        useContext(CartContext);


    const [added, setAdded] =
        useState(false);


    const [error, setError] =
        useState("");


    if (!product) {

        return (

            <div className="product-detail__not-found">

                <h2>
                    Producto no encontrado
                </h2>


                <Link
                    to="/productos"
                    className="product-detail__back-button"
                >
                    Volver al catálogo
                </Link>

            </div>

        );

    }


    const isOutOfStock =
        product.stock <= 0;


    const discount =
        Number(product.discount) || 0;


    const finalPrice =
        discount > 0
            ? Math.round(
                product.price *
                (1 - discount / 100)
            )
            : product.price;


    const handleAdd = (quantity) => {

        /*
         * Creamos una copia del producto
         * utilizando como price el precio
         * final que realmente paga el usuario.
         */

        const productWithFinalPrice = {

            ...product,

            originalPrice:
                product.price,

            price:
                finalPrice

        };


        const addedSuccessfully =
            addItem(
                productWithFinalPrice,
                quantity
            );


        if (addedSuccessfully) {

            setError("");

            setAdded(true);

        } else {

            setError(
                "No hay suficiente stock disponible."
            );

        }

    };


    return (

        <main className="product-detail">

            <div className="container">

                {/* Breadcrumb */}

                <nav
                    className="product-detail__breadcrumb"
                    aria-label="Breadcrumb"
                >

                    <Link to="/">
                        Inicio
                    </Link>

                    <span>
                        /
                    </span>

                    <Link to="/productos">
                        Productos
                    </Link>

                    <span>
                        /
                    </span>

                    <span>
                        {product.name}
                    </span>

                </nav>


                <section className="product-detail__main">

                    {/* Imagen */}

                    <div className="product-detail__image-wrapper">

                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-detail__image"
                        />


                        {product.category && (

                            <span className="product-detail__category">
                                {product.category}
                            </span>

                        )}

                    </div>


                    {/* Información */}

                    <div className="product-detail__content">

                        <span className="product-detail__eyebrow">

                            {product.brand ||
                                "VOLLEY STORE"}

                        </span>


                        <h1 className="product-detail__title">
                            {product.name}
                        </h1>


                        {/* Metadata */}

                        <div className="product-detail__meta">

                            {product.brand && (

                                <span>

                                    Marca:

                                    <strong>
                                        {product.brand}
                                    </strong>

                                </span>

                            )}


                            {product.sku && (

                                <span>

                                    SKU:

                                    <strong>
                                        {product.sku}
                                    </strong>

                                </span>

                            )}

                        </div>


                        {/* Precio */}

                        <div className="product-detail__price-wrapper">

                            {discount > 0 && (

                                <span className="product-detail__price-original">

                                    {formatPrice(
                                        product.price
                                    )}

                                </span>

                            )}


                            <p className="product-detail__price">

                                {formatPrice(
                                    finalPrice
                                )}

                            </p>


                            {discount > 0 && (

                                <span className="product-detail__discount">

                                    {discount}%
                                    OFF

                                </span>

                            )}

                        </div>


                        <div className="product-detail__separator" />


                        {/* Descripción */}

                        <div className="product-detail__description">

                            <h2>
                                Sobre este producto
                            </h2>


                            <p>

                                {product.description ||
                                    "Producto seleccionado por Volley Store para acompañarte dentro y fuera de la cancha."}

                            </p>

                        </div>


                        {/* Stock */}

                        <div className="product-detail__stock">

                            <span
                                className={
                                    isOutOfStock
                                        ? "product-detail__stock-dot product-detail__stock-dot--empty"
                                        : "product-detail__stock-dot"
                                }
                            />


                            <span>

                                {isOutOfStock
                                    ? "Producto sin stock"
                                    : `${product.stock} unidades disponibles`
                                }

                            </span>

                        </div>


                        {/* Error stock acumulado */}

                        {error && (

                            <div
                                className="alert alert-danger"
                                role="alert"
                            >
                                {error}
                            </div>

                        )}


                        {/* ItemCount */}

                        {!isOutOfStock &&
                            !added && (

                            <div className="product-detail__purchase">

                                <span className="product-detail__quantity-label">
                                    Cantidad
                                </span>


                                <ItemCount
                                    stock={product.stock}
                                    initial={1}
                                    onAdd={handleAdd}
                                />

                            </div>

                        )}


                        {/* Producto agregado */}

                        {added && (

                            <div className="product-detail__added">

                                <div>

                                    <strong>
                                        ✓ Producto agregado
                                    </strong>

                                    <span>
                                        Ya está en tu carrito.
                                    </span>

                                </div>


                                <Link
                                    to="/cart"
                                    className="product-detail__cart-button"
                                >
                                    Ir al carrito
                                </Link>

                            </div>

                        )}


                        {/* Beneficios */}

                        <div className="product-detail__benefits">

                            <div className="product-detail__benefit">

                                <span>
                                    <FaTruck />
                                </span>


                                <div>

                                    <strong>
                                        Envíos rápidos
                                    </strong>

                                    <small>
                                        Recibí tu pedido de forma segura.
                                    </small>

                                </div>

                            </div>


                            <div className="product-detail__benefit">

                                <span>
                                    <FaLock />
                                </span>


                                <div>

                                    <strong>
                                        Compra segura
                                    </strong>

                                    <small>
                                        Tus datos están protegidos.
                                    </small>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </main>

    );

}


export default ItemDetail;