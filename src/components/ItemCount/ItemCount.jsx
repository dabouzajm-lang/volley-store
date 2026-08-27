import { useState } from "react";

import "./ItemCount.css";


function ItemCount({ stock, initial = 1, onAdd }) {

    const [count, setCount] = useState(initial);


    const increment = () => {

        if (count < stock) {
            setCount(count + 1);
        }

    };


    const decrement = () => {

        if (count > 1) {
            setCount(count - 1);
        }

    };


    return (

        <div className="item-count">

            <div className="item-count__controls">

                <button
                    type="button"
                    className="item-count__button"
                    onClick={decrement}
                    disabled={count <= 1}
                >
                    −
                </button>


                <span className="item-count__value">
                    {count}
                </span>


                <button
                    type="button"
                    className="item-count__button"
                    onClick={increment}
                    disabled={count >= stock}
                >
                    +
                </button>

            </div>


            <button
                type="button"
                className="item-count__add"
                onClick={() => onAdd(count)}
                disabled={stock <= 0}
            >
                Agregar al carrito
            </button>

        </div>

    );

}


export default ItemCount;