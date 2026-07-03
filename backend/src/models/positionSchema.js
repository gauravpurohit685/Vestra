const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema(
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
        enum: ["MIS"],
        default: "MIS"
    },

    quantity: {
        type: Number,
        required: true,
        min: 1
    },

    averagePrice: {
        type: Number,
        required: true,
        min: 0
    },

    transactionType: {
        type: String,
        enum: ["BUY", "SELL"],
        required: true
    }
},
{
    timestamps: true
});

// One open MIS position per stock per user
positionSchema.index(
    {
        userId: 1,
        symbol: 1,
        transactionType: 1
    },
    {
        unique: true
    }
);

module.exports = mongoose.model("Position", positionSchema);