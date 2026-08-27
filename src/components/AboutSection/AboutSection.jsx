import "./AboutSection.css";

function AboutSection() {

    return (

        <section
            id="nosotros"
            className="about"
        >

            <div className="container">

                <div className="row align-items-center g-5">

                    {/* Imagen / elemento visual */}

                    <div className="col-lg-6">

                        <div className="about__visual">

                            <div className="about__image">

                                <span>
                                    🏐
                                </span>

                            </div>

                            <div className="about__experience">

                                <strong>
                                    +10
                                </strong>

                                <span>
                                    años acompañando
                                    <br />
                                    al vóley
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* Contenido */}

                    <div className="col-lg-6">

                        <span className="section-eyebrow">
                            SOBRE VOLLEY STORE
                        </span>

                        <h2 className="about__title">
                            Nacimos dentro
                            <span> de una cancha.</span>
                        </h2>

                        <p className="about__lead">

                            Volley Store nació con una idea simple:
                            hacer que los jugadores de vóley puedan
                            encontrar en un solo lugar productos
                            pensados realmente para su deporte.

                        </p>

                        <p className="about__text">

                            Trabajamos para acercar equipamiento,
                            indumentaria y accesorios de calidad a
                            jugadores, entrenadores y clubes.
                            Creemos que cada entrenamiento, cada
                            partido y cada desafío merece contar con
                            las herramientas adecuadas.

                        </p>


                        <div className="about__values">

                            <div className="about__value">

                                <span className="about__value-icon">
                                    🏐
                                </span>

                                <div>

                                    <h3>
                                        Pasión
                                    </h3>

                                    <p>
                                        Vivimos el deporte y entendemos
                                        a quienes lo practican.
                                    </p>

                                </div>

                            </div>


                            <div className="about__value">

                                <span className="about__value-icon">
                                    ⚡
                                </span>

                                <div>

                                    <h3>
                                        Calidad
                                    </h3>

                                    <p>
                                        Seleccionamos productos pensando
                                        en rendimiento y durabilidad.
                                    </p>

                                </div>

                            </div>


                            <div className="about__value">

                                <span className="about__value-icon">
                                    🤝
                                </span>

                                <div>

                                    <h3>
                                        Comunidad
                                    </h3>

                                    <p>
                                        Creemos que el vóley se construye
                                        en equipo.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default AboutSection;