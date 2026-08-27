import { Link } from "react-router-dom";

import formatPrice from "../../utils/formatPrice";

import "./Item.css";


function Item({ product }) {

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


                {discount > 0 && (

                    <span className="product-card__discount">
                        -{discount}%
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

                    {product.brand ||
                        "VOLLEY STORE"}

                </span>


                <h3 className="product-card__title">
                    {product.name}
                </h3>


                <div className="product-card__footer">

                    <div className="product-card__price-wrapper">

                        {discount > 0 && (

                            <span className="product-card__price-original">

                                {formatPrice(
                                    product.price
                                )}

                            </span>

                        )}


                        <span className="product-card__price">

                            {formatPrice(
                                finalPrice
                            )}

                        </span>

                    </div>


                    <Link
                        to={`/item/${product.id}`}
                        className="product-card__button"
                    >

                        Ver producto

                        <span>
                            →
                        </span>

                    </Link>

                </div>

            </div>

        </article>

    );

}


export default Item;