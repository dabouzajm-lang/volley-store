import { Link } from "react-router-dom";

import "./CategorySection.css";

function CategorySection() {

    const categories = [
        {
            id: "pelotas",
            name: "Pelotas",
            description: "Pelotas para entrenamiento y competición.",
            icon: "🏐"
        },
        {
            id: "indumentaria",
            name: "Indumentaria",
            description: "Prendas pensadas para acompañar tu juego.",
            icon: "👕"
        },
        {
            id: "accesorios",
            name: "Accesorios",
            description: "Todo lo necesario para complementar tu equipamiento.",
            icon: "🎒"
        }
    ];

    return (

        <section className="categories">

            <div className="container">

                <div className="categories__header">

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

                                <div className="category-card__icon">
                                    {category.icon}
                                </div>

                                <div>

                                    <h3>
                                        {category.name}
                                    </h3>

                                    <p>
                                        {category.description}
                                    </p>

                                    <span className="category-card__link">
                                        Ver productos →
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