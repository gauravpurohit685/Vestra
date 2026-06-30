const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    symbol: {
        type: String,
        required: true,
        uppercase: true
    },

    product: {
        type: String,
        enum: ["CNC", "MIS"],
        required: true
    },

    transactionType: {
        type: String,
        enum: ["BUY", "SELL"],
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        min: 1
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    status: {
        type: String,
        enum: [
            "PENDING",
            "EXECUTED",
            "CANCELLED",
            "REJECTED"
        ],
        default: "EXECUTED"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Order", orderSchema);