import Item from "../Item/Item";


function ItemList({ products }) {

    return (

        <div className="row g-4">

            {products.map((product) => (

                <div
                    className="col-12 col-sm-6 col-xl-4"
                    key={product.id}
                >

                    <Item product={product} />

                </div>

            ))}

        </div>

    );

}


export default ItemList;