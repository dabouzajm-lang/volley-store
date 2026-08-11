import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore";

import { db } from "../../firebase";

import ItemList from "../ItemList/ItemList";


function ItemListContainer() {

    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setLoading(true);


        const productsCollection = collection(
            db,
            "products"
        );


        let productsQuery;


        if (categoryId) {

            productsQuery = query(
                productsCollection,
                where(
                    "category",
                    "==",
                    categoryId
                )
            );

        } else {

            productsQuery = productsCollection;

        }


        getDocs(productsQuery)

            .then((snapshot) => {

                const productsList = snapshot.docs.map(
                    (doc) => {

                        return {
                            id: doc.id,
                            ...doc.data()
                        };

                    }
                );


                setProducts(productsList);

            })

            .catch((error) => {

                console.error(
                    "Error obteniendo productos:",
                    error
                );

            })

            .finally(() => {

                setLoading(false);

            });

    }, [categoryId]);


    if (loading) {

        return (

            <div className="container text-center mt-5">

                <h2>
                    Cargando productos...
                </h2>

            </div>

        );

    }


    return (

        <div className="container mt-5">

            <h2 className="text-center mb-4">

                {categoryId
                    ? `Categoría: ${categoryId}`
                    : "Productos destacados"
                }

            </h2>


            {products.length > 0 ? (

                <ItemList products={products} />

            ) : (

                <h3 className="text-center">

                    No hay productos disponibles
                    en esta categoría.

                </h3>

            )}

        </div>

    );

}


export default ItemListContainer;