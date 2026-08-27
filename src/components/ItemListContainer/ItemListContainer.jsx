import { useEffect, useMemo, useState } from "react";

import { Link, useParams } from "react-router-dom";

import {
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore";

import { db } from "../../firebase";

import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";


function ItemListContainer() {

    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("default");


    useEffect(() => {

        setLoading(true);
        setError(false);


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
                    (doc) => ({
                        id: doc.id,
                        ...doc.data()
                    })
                );


                setProducts(productsList);

            })

            .catch((error) => {

                console.error(
                    "Error obteniendo productos:",
                    error
                );

                setError(true);

            })

            .finally(() => {

                setLoading(false);

            });

    }, [categoryId]);


    const pageContent = {

        pelotas: {
            eyebrow: "PELOTAS",
            title: "Pelotas para cada punto.",
            description:
                "Modelos para entrenamiento, competencia y jugadores que buscan mayor control y precisión."
        },

        indumentaria: {
            eyebrow: "INDUMENTARIA",
            title: "Jugá cómodo. Jugá mejor.",
            description:
                "Indumentaria pensada para acompañar el movimiento y la intensidad de cada partido."
        },

        accesorios: {
            eyebrow: "ACCESORIOS",
            title: "Los detalles también juegan.",
            description:
                "Accesorios seleccionados para entrenamiento, competencia y cuidado del jugador."
        }

    };


    const currentContent = categoryId
        ? pageContent[categoryId]
        : null;


    const filteredProducts = useMemo(() => {

        const normalizedSearch = search
            .trim()
            .toLowerCase();


        const filtered = products.filter((product) => {

            if (!normalizedSearch) {
                return true;
            }


            const name = product.name
                ?.toLowerCase() || "";

            const category = product.category
                ?.toLowerCase() || "";


            return (
                name.includes(normalizedSearch) ||
                category.includes(normalizedSearch)
            );

        });


        const sorted = [...filtered];


        if (sortOption === "name-asc") {

            sorted.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

        }


        if (sortOption === "price-asc") {

            sorted.sort(
                (a, b) => a.price - b.price
            );

        }


        if (sortOption === "price-desc") {

            sorted.sort(
                (a, b) => b.price - a.price
            );

        }


        return sorted;

    }, [products, search, sortOption]);


    if (loading) {

        return (

            <main className="catalog-page">

                <div className="container">

                    <div className="catalog-loading">

                        <div
                            className="spinner-border"
                            role="status"
                        >
                            <span className="visually-hidden">
                                Cargando...
                            </span>
                        </div>

                        <p>
                            Cargando productos...
                        </p>

                    </div>

                </div>

            </main>

        );

    }


    if (error) {

        return (

            <main className="catalog-page">

                <div className="container">

                    <div className="catalog-error">

                        <span>
                            CATÁLOGO
                        </span>

                        <h1>
                            No pudimos cargar los productos.
                        </h1>

                        <p>
                            Intentá nuevamente en unos instantes.
                        </p>

                    </div>

                </div>

            </main>

        );

    }


    return (

        <main className="catalog-page">

            <div className="container">

                {/* Header */}

                <header className="catalog-header">

                    <div className="catalog-header__content">

                        <span className="catalog-header__eyebrow">

                            {currentContent
                                ? currentContent.eyebrow
                                : "CATÁLOGO"
                            }

                        </span>


                        <h1>

                            {currentContent
                                ? currentContent.title
                                : "Equipate para tu próximo partido."
                            }

                        </h1>


                        <p>

                            {currentContent
                                ? currentContent.description
                                : "Explorá nuestra selección de equipamiento, indumentaria y accesorios para quienes viven el vóley."
                            }

                        </p>

                    </div>


                    <div className="catalog-header__count">

                        <strong>
                            {filteredProducts.length}
                        </strong>

                        <span>
                            {filteredProducts.length === 1
                                ? "producto encontrado"
                                : "productos encontrados"
                            }
                        </span>

                    </div>

                </header>


                {/* Search + sort */}

                <div className="catalog-tools">

                    <div className="catalog-search">

                        <label
                            htmlFor="catalog-search"
                            className="visually-hidden"
                        >
                            Buscar productos
                        </label>

                        <input
                            id="catalog-search"
                            type="search"
                            placeholder="Buscar productos..."
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                        />

                    </div>


                    <div className="catalog-sort">

                        <label htmlFor="catalog-sort">
                            Ordenar por
                        </label>

                        <select
                            id="catalog-sort"
                            value={sortOption}
                            onChange={(event) =>
                                setSortOption(event.target.value)
                            }
                        >

                            <option value="default">
                                Relevancia
                            </option>

                            <option value="name-asc">
                                Nombre A-Z
                            </option>

                            <option value="price-asc">
                                Precio: menor a mayor
                            </option>

                            <option value="price-desc">
                                Precio: mayor a menor
                            </option>

                        </select>

                    </div>

                </div>


                {/* Filters */}

                <nav
                    className="catalog-filters"
                    aria-label="Filtrar productos"
                >

                    <Link
                        to="/productos"
                        className={
                            !categoryId
                                ? "catalog-filter catalog-filter--active"
                                : "catalog-filter"
                        }
                    >
                        Todos
                    </Link>


                    <Link
                        to="/categoria/pelotas"
                        className={
                            categoryId === "pelotas"
                                ? "catalog-filter catalog-filter--active"
                                : "catalog-filter"
                        }
                    >
                        Pelotas
                    </Link>


                    <Link
                        to="/categoria/indumentaria"
                        className={
                            categoryId === "indumentaria"
                                ? "catalog-filter catalog-filter--active"
                                : "catalog-filter"
                        }
                    >
                        Indumentaria
                    </Link>


                    <Link
                        to="/categoria/accesorios"
                        className={
                            categoryId === "accesorios"
                                ? "catalog-filter catalog-filter--active"
                                : "catalog-filter"
                        }
                    >
                        Accesorios
                    </Link>

                </nav>


                {/* Products */}

                <section className="catalog-products">

                    {filteredProducts.length > 0 ? (

                        <ItemList
                            products={filteredProducts}
                        />

                    ) : (

                        <div className="catalog-empty">

                            <span>
                                SIN RESULTADOS
                            </span>

                            <h2>
                                No encontramos productos.
                            </h2>

                            <p>
                                Probá con otro término de búsqueda
                                o explorá otra categoría.
                            </p>


                            {search && (

                                <button
                                    type="button"
                                    className="catalog-empty__button"
                                    onClick={() => setSearch("")}
                                >
                                    Limpiar búsqueda
                                </button>

                            )}

                        </div>

                    )}

                </section>

            </div>

        </main>

    );

}


export default ItemListContainer;