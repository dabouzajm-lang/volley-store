import { useState } from "react";

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
    <div className="mt-4">
      <div className="d-flex align-items-center gap-3">

        <button
          className="btn btn-outline-secondary"
          onClick={decrement}
        >
          -
        </button>

        <span className="fs-4">{count}</span>

        <button
          className="btn btn-outline-secondary"
          onClick={increment}
        >
          +
        </button>

      </div>

      <button
        className="btn btn-success mt-3"
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>

    </div>
  );
}

export default ItemCount;