import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";

import { db } from "../../firebase";

import ItemDetail from "../ItemDetail/ItemDetail";



function ItemDetailContainer() {

    const { itemId } = useParams();

    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const productDoc = doc(
            db,
            "products",
            itemId
        );


        getDoc(productDoc)
            .then((snapshot) => {

                if (snapshot.exists()) {

                    setProduct({
                        id: snapshot.id,
                        ...snapshot.data()
                    });

                } else {

                    console.log(
                        "El producto no existe"
                    );

                }

            })

            .catch((error) => {

                console.error(
                    "Error obteniendo el producto:",
                    error
                );

            })

            .finally(() => {

                setLoading(false);

            });

    }, [itemId]);


    if (loading) {

        return (

            <div className="container text-center mt-5">

                <h2>
                    Cargando producto...
                </h2>

            </div>

        );

    }


    if (!product) {

        return (

            <div className="container text-center mt-5">

                <h2>
                    Producto no encontrado
                </h2>

            </div>

        );

    }


    return (

        <div className="container mt-5">

            <ItemDetail product={product} />

        </div>

    );

}


export default ItemDetailContainer;