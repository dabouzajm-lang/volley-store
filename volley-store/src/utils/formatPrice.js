function formatPrice(value) {

    const numericValue = Number(value);

    if (Number.isNaN(numericValue)) {
        return "$0";
    }

    return `$${numericValue.toLocaleString("es-AR", {
        maximumFractionDigits: 0
    })}`;

}


export default formatPrice;
