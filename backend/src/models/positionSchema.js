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
        uppercase: true,
        trim: true
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
    },
    {
        unique: true
    }
);

module.exports = mongoose.model("Position", positionSchema);