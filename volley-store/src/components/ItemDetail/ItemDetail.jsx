import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {

    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    const handleAdd = (quantity) => {
        console.log(`Agregaste ${quantity} unidades`);
    };

    return (

        <div className="card">

            <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
            />

            <div className="card-body">

                <h2>{product.name}</h2>

                <p>Precio: ${product.price}</p>

                <p>Stock disponible: {product.stock}</p>

                <p>Categoría: {product.category}</p>

                <ItemCount
                    stock={product.stock}
                    initial={1}
                    onAdd={handleAdd}
                />

            </div>

        </div>

    );
}

export default ItemDetail;