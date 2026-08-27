import {
    FaTruck,
    FaLock,
    FaVolleyballBall,
    FaHandshake
} from "react-icons/fa";

import "./Benefits.css";


function Benefits() {

    const benefits = [
        {
            icon: <FaTruck />,
            title: "Envíos rápidos",
            description:
                "Recibí tus productos donde estés, de manera rápida y segura."
        },
        {
            icon: <FaLock />,
            title: "Compra segura",
            description:
                "Protegemos tus datos durante todo el proceso de compra."
        },
        {
            icon: <FaVolleyballBall />,
            title: "Productos seleccionados",
            description:
                "Elegimos equipamiento pensando en las necesidades reales de los jugadores."
        },
        {
            icon: <FaHandshake />,
            title: "Atención personalizada",
            description:
                "Estamos para ayudarte a encontrar el producto adecuado para tu juego."
        }
    ];


    return (

        <section className="benefits">

            <div className="container">

                <div className="benefits__header">

                    <span className="section-eyebrow">
                        LA EXPERIENCIA VOLLEY STORE
                    </span>

                    <h2>
                        Más que una tienda deportiva.
                    </h2>

                    <p>
                        Queremos acompañarte antes, durante y después
                        de cada compra.
                    </p>

                </div>


                <div className="row g-4">

                    {benefits.map((benefit) => (

                        <div
                            className="col-sm-6 col-lg-3"
                            key={benefit.title}
                        >

                            <article className="benefit-card">

                                <div className="benefit-card__icon">
                                    {benefit.icon}
                                </div>

                                <h3>
                                    {benefit.title}
                                </h3>

                                <p>
                                    {benefit.description}
                                </p>

                            </article>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}


export default Benefits;