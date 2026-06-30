const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    symbol: {
        type: String,
        required: true,
        uppercase: true,
    },

    quantity: {
        type: Number,
        required: true,
        min: 0
    },

    averagePrice: {
        type: Number,
        required: true,
        min: 0
    }
},
{
    timestamps: true
});

holdingSchema.index(
    { userId: 1, symbol: 1 },
    { unique: true }
);


module.exports = mongoose.model("Holding", holdingSchema);