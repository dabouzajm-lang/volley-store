import { useEffect, useState } from "react";

import {
    collection,
    getDocs
} from "firebase/firestore";

import { db } from "../../firebase";

import Item from "../Item/Item";

import "./FeaturedProducts.css";


function FeaturedProducts() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);


    useEffect(() => {

        const productsCollection = collection(db, "products");


        getDocs(productsCollection)
            .then((snapshot) => {

                const productsList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProducts(productsList.slice(0, 4));

            })
            .catch((error) => {

                console.error(
                    "Error al obtener productos destacados:",
                    error
                );

                setError(true);

            })
            .finally(() => {

                setLoading(false);

            });

    }, []);


    if (loading) {

        return (

            <section className="featured-products">

                <div className="container">

                    <div className="featured-products__loading">

                        <div
                            className="spinner-border"
                            role="status"
                        >
                            <span className="visually-hidden">
                                Cargando...
                            </span>
                        </div>

                        <p>
                            Cargando productos destacados...
                        </p>

                    </div>

                </div>

            </section>

        );

    }


    if (error) {

        return (

            <section className="featured-products">

                <div className="container">

                    <div className="alert alert-danger">
                        No pudimos cargar los productos destacados.
                    </div>

                </div>

            </section>

        );

    }


    return (

        <section className="featured-products">

            <div className="container">

                <div className="featured-products__header">

                    <div>

                        <span className="section-eyebrow">
                            SELECCIÓN VOLLEY STORE
                        </span>

                        <h2>
                            Productos destacados
                        </h2>

                    </div>

                    <p>
                        Una selección de nuestros productos
                        más destacados.
                    </p>

                </div>


                <div className="row g-4">

                    {products.map((product) => (

                        <div
                            className="col-sm-6 col-lg-3"
                            key={product.id}
                        >

                            <Item product={product} />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}


export default FeaturedProducts;