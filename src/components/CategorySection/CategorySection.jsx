import { Link } from "react-router-dom";

import "./CategorySection.css";

function CategorySection() {

const categories = [
            {
                id: "pelotas",
                name: "Pelotas",
                description:
                    "Pelotas para entrenamiento y competición.",
                image: "/images/category-pelotas.jpg"
            },
            {
                id: "indumentaria",
                name: "Indumentaria",
                description:
                    "Prendas pensadas para acompañar tu juego.",
                image: "/images/category-indumentaria.jpg"
            },
            {
                id: "accesorios",
                name: "Accesorios",
                description:
                    "Todo lo necesario para complementar tu equipamiento.",
                image: "/images/category-accesorios.jpg"
            }
        ];

    return (

        <section className="categories">

            <div className="container">

                <div className="categories__header animate-fade-up">

                    <div>

                        <span className="section-eyebrow">
                            EXPLORÁ NUESTRO CATÁLOGO
                        </span>

                        <h2 className="categories__title">
                            Encontrá lo que necesitás
                        </h2>

                    </div>

                    <p className="categories__description">
                        Descubrí nuestra selección de productos
                        pensados para acompañarte dentro y fuera
                        de la cancha.
                    </p>

                </div>


                <div className="row g-4">

                    {categories.map((category) => (

                        <div
                            className="col-md-4"
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

                            <div className="category-card__overlay"></div>

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
                            Explorar →
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