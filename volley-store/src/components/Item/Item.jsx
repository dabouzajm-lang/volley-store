import { Link } from "react-router-dom";


function Item({ product }) {

    return (

        <div className="col-md-4 mb-4">

            <div className="card h-100">

                <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                />

                <div className="card-body">

                    <h5 className="card-title">
                        {product.name}
                    </h5>

                    <p>
                        ${product.price}
                    </p>

                    <Link
                        to={`/item/${product.id}`}
                        className="btn btn-primary"
                    >
                        Ver detalle
                    </Link>

                </div>

            </div>

        </div>

    );

}


export default Item;