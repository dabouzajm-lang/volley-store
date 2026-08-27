import { Link } from "react-router-dom";

import "./CategorySection.css";


function CategorySection() {

    const baseUrl = import.meta.env.BASE_URL;


    const categories = [

        {
            id: "pelotas",
            name: "Pelotas",
            description:
                "Pelotas para entrenamiento y competición.",
            image:
                `${baseUrl}images/category-pelotas.jpg`
        },

        {
            id: "indumentaria",
            name: "Indumentaria",
            description:
                "Prendas pensadas para acompañar tu juego.",
            image:
                `${baseUrl}images/category-indumentaria.jpg`
        },

        {
            id: "accesorios",
            name: "Accesorios",
            description:
                "Todo lo necesario para complementar tu equipamiento.",
            image:
                `${baseUrl}images/category-accesorios.jpg`
        }

    ];


    return (

        <section className="categories">

            <div className="container">

                <div className="categories__header animate-fade-up">

                    <span className="section-eyebrow">
                        ENCONTRÁ LO QUE NECESITÁS
                    </span>


                    <h2>
                        Comprá por categoría
                    </h2>


                    <p>

                        Equipamiento seleccionado para cada parte
                        de tu juego.

                    </p>

                </div>


                <div className="row g-4">

                    {categories.map((category) => (

                        <div
                            className="col-12 col-md-4"
                            key={category.id}
                        >

                            <Link
                                to={`/categoria/${category.id}`}
                                className="category-card"
                            >

                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="category-card__image"
                                />


                                <div
                                    className="category-card__overlay"
                                />


                                <div className="category-card__content">

                                    <span className="category-card__eyebrow">
                                        CATEGORÍA
                                    </span>


                                    <h3>
                                        {category.name}
                                    </h3>


                                    <p>
                                        {category.description}
                                    </p>


                                    <span className="category-card__link">

                                        Explorar

                                        <span>
                                            →
                                        </span>

                                    </span>

                                </div>

                            </Link>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}


export default CategorySection;