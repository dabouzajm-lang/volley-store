import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase";

import ItemList from "../ItemList/ItemList";


function ItemListContainer() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const productsCollection = collection(db, "products");


        getDocs(productsCollection)
            .then((snapshot) => {

                const productsList = snapshot.docs.map((doc) => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    };

                });


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

    }, []);


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
                Productos destacados
            </h2>

            <ItemList products={products} />

        </div>

    );

}


export default ItemListContainer;