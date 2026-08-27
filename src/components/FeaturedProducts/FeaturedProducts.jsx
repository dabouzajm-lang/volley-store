import { useEffect, useState } from "react";

import {
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore";

import { db } from "../../firebase";

import Item from "../Item/Item";

import "./FeaturedProducts.css";


function FeaturedProducts() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);


    useEffect(() => {

        const productsCollection = collection(
            db,
            "products"
        );


        const featuredProductsQuery = query(
            productsCollection,
            where(
                "featured",
                "==",
                true
            )
        );


        getDocs(featuredProductsQuery)

            .then((snapshot) => {

                const productsList = snapshot.docs.map(
                    (doc) => ({
                        id: doc.id,
                        ...doc.data()
                    })
                );


                setProducts(productsList);

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


    if (products.length === 0) {

        return null;

    }


    return (

        <section className="featured-products">

            <div className="container">

                <div className="featured-products__header animate-fade-up">

                    <div>

                        <span className="section-eyebrow">
                            SELECCIÓN VOLLEY STORE
                        </span>


                        <h2>
                            Productos destacados
                        </h2>

                    </div>


                    <p>
                        Una selección de equipamiento que elegimos
                        para acompañarte en tu próximo partido.
                    </p>

                </div>


                <div className="row g-4">

                    {products.map((product) => (

                        <div
                            className="col-12 col-sm-6 col-lg-3"
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