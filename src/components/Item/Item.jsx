import { Link } from "react-router-dom";

import "./Item.css";


function Item({ product }) {

    const isOutOfStock = product.stock <= 0;

    const finalPrice =
        product.discount > 0
            ? product.price * (1 - product.discount / 100)
            : product.price;


    return (

        <article className="product-card">

            <Link
                to={`/item/${product.id}`}
                className="product-card__image-wrapper"
            >

                {product.isNew && (

                    <span className="product-card__new">
                        Nuevo
                    </span>

                )}


                {product.featured && (

                    <span className="product-card__featured">
                        Destacado
                    </span>

                )}


                {product.discount > 0 && (

                    <span className="product-card__discount">
                        -{product.discount}%
                    </span>

                )}


                <img
                    src={product.image}
                    className="product-card__image"
                    alt={product.name}
                />


                {product.category && (

                    <span className="product-card__category">
                        {product.category}
                    </span>

                )}


                {isOutOfStock && (

                    <span className="product-card__stock">
                        Sin stock
                    </span>

                )}

            </Link>


            <div className="product-card__body">

                <span className="product-card__eyebrow">
                    {product.brand || "VOLLEY STORE"}
                </span>


                <h3 className="product-card__title">
                    {product.name}
                </h3>


                <div className="product-card__footer">

                    <div className="product-card__price-wrapper">

                        {product.discount > 0 && (

                            <span className="product-card__price-original">
                                ${product.price}
                            </span>

                        )}


                        <span className="product-card__price">
                            ${Math.round(finalPrice)}
                        </span>

                    </div>


                    <Link
                        to={`/item/${product.id}`}
                        className="product-card__button"
                    >
                        Ver producto
                        <span>→</span>
                    </Link>

                </div>

            </div>

        </article>

    );

}


export default Item;