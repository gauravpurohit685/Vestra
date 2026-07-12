const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    cashBalance: {
        type: Number,
        required: true,
        default: 25000,
        min: 0
    },

    tradingBalance: {
        type: Number,
        required: true,
        default: 50000,
        min: 0
    },

    payIn: {
        type: Number,
        default: 0,
        min: 0
    },

    payOut: {
        type: Number,
        default: 0,
        min: 0
    },

    currency: {
        type: String,
        default: "INR"
    }
},
{
    timestamps: true
});

module.exports =  mongoose.model("Account", accountSchema);