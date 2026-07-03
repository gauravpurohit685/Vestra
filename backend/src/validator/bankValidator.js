const bankValidator = (data) => {
    let { amount } = data;

    // Amount is required
    if (amount === undefined || amount === null) {
        throw new Error("Amount is required.");
    }

    // Convert string to number if necessary
    amount = Number(amount);

    // Check if conversion succeeded
    if (Number.isNaN(amount)) {
        throw new Error("Amount must be a valid number.");
    }

    // Amount should be positive
    if (amount <= 0) {
        throw new Error("Amount must be greater than zero.");
    }

    // Allow only up to 2 decimal places
    if (!Number.isInteger(amount * 100)) {
        throw new Error("Amount can have at most two decimal places.");
    }

    return {
        amount
    };
};

module.exports = bankValidator;