import { useState } from "react";

import {
    FaEnvelope,
    FaCheck
} from "react-icons/fa";

import "./Newsletter.css";


function Newsletter() {

    const [email, setEmail] = useState("");

    const [status, setStatus] = useState("idle");

    const [message, setMessage] = useState("");


    const handleChange = (event) => {

        setEmail(event.target.value);

        if (status !== "idle") {
            setStatus("idle");
            setMessage("");
        }

    };


    const handleSubmit = (event) => {

        event.preventDefault();


        const normalizedEmail = email.trim();


        if (!normalizedEmail) {

            setStatus("error");

            setMessage(
                "Ingresá tu email para suscribirte."
            );

            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(normalizedEmail)) {

            setStatus("error");

            setMessage(
                "Ingresá un email válido."
            );

            return;

        }


        /*
         * Simulación de suscripción.
         *
         * En una futura versión esto podría
         * conectarse con Firestore, Mailchimp,
         * Brevo u otro servicio.
         */

        setStatus("success");

        setMessage(
            "¡Listo! Ya sos parte de la comunidad Volley Store."
        );

        setEmail("");

    };


    return (

        <section className="newsletter">

            <div className="container">

                <div className="newsletter__box">

                    {/* Contenido */}

                    <div className="newsletter__content">

                        <div className="newsletter__icon">

                            <FaEnvelope />

                        </div>


                        <span className="newsletter__eyebrow">
                            COMUNIDAD VOLLEY STORE
                        </span>


                        <h2>
                            Viví el vóley
                            <span> también fuera de la cancha.</span>
                        </h2>


                        <p>

                            Recibí novedades, nuevos productos,
                            lanzamientos y beneficios exclusivos
                            directamente en tu email.

                        </p>

                    </div>


                    {/* Formulario */}

                    <div className="newsletter__form-wrapper">

                        {status === "success" ? (

                            <div className="newsletter__success">

                                <div className="newsletter__success-icon">

                                    <FaCheck />

                                </div>


                                <div>

                                    <strong>
                                        Suscripción confirmada
                                    </strong>

                                    <span>
                                        {message}
                                    </span>

                                </div>

                            </div>

                        ) : (

                            <form
                                className="newsletter__form"
                                onSubmit={handleSubmit}
                                noValidate
                            >

                                <label
                                    htmlFor="newsletter-email"
                                    className="newsletter__label"
                                >
                                    Tu email
                                </label>


                                <div className="newsletter__input-group">

                                    <input
                                        id="newsletter-email"
                                        type="email"
                                        value={email}
                                        onChange={handleChange}
                                        placeholder="nombre@email.com"
                                        autoComplete="email"
                                        aria-describedby={
                                            message
                                                ? "newsletter-message"
                                                : undefined
                                        }
                                    />


                                    <button
                                        type="submit"
                                        className="newsletter__button"
                                    >
                                        Suscribirme
                                    </button>

                                </div>


                                {status === "error" && (

                                    <p
                                        id="newsletter-message"
                                        className="newsletter__error"
                                    >
                                        {message}
                                    </p>

                                )}


                                <p className="newsletter__privacy">

                                    Sin spam. Solo contenido relacionado
                                    con Volley Store.

                                </p>

                            </form>

                        )}

                    </div>

                </div>

            </div>

        </section>

    );

}


export default Newsletter;
