import { Link } from "react-router-dom";

import "./NotFound.css";


function NotFound() {

    return (

        <main className="not-found">

            <div className="container">

                <section className="not-found__content">

                    <span className="not-found__code">
                        404
                    </span>


                    <span className="not-found__eyebrow">
                        PÁGINA NO ENCONTRADA
                    </span>


                    <h1>
                        Parece que esta pelota salió de la cancha.
                    </h1>


                    <p>

                        La página que estás buscando no existe,
                        cambió de ubicación o fue eliminada.

                    </p>


                    <div className="not-found__actions">

                        <Link
                            to="/"
                            className="not-found__primary"
                        >
                            Volver al inicio
                        </Link>


                        <Link
                            to="/productos"
                            className="not-found__secondary"
                        >
                            Explorar productos
                        </Link>

                    </div>

                </section>

            </div>

        </main>

    );

}


export default NotFound;