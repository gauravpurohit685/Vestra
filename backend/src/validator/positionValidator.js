const positionValidator = (data) => {
    let { symbol, quantity, price } = data;

    // Symbol Validation
    if (!symbol || typeof symbol !== "string") {
        throw new Error("Stock symbol is required.");
    }

    symbol = symbol.trim().toUpperCase();

    // Most stock symbols contain only letters, numbers, '.', '&' or '-'
    if (!/^[A-Z0-9.&-]+$/.test(symbol)) {
        throw new Error("Invalid stock symbol.");
    }

    // Quantity Validation
    if (quantity === undefined || quantity === null) {
        throw new Error("Quantity is required.");
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Quantity must be a positive integer.");
    }

    // Price Validation
    if (price === undefined || price === null) {
        throw new Error("Price is required.");
    }

    if (typeof price !== "number" || Number.isNaN(price) || price <= 0) {
        throw new Error("Price must be a positive number.");
    }

    return {
        symbol,
        quantity,
        price
    };
};

module.exports = positionValidator;