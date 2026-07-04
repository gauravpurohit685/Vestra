const express = require("express");

const Holding = require("../models/holdingSchema");
const Account = require("../models/accountSchema");
const Order = require("../models/orderSchema");

const userAuth = require("../middleware/userAuth");
const holdingValidator = require("../validator/holdingValidator");

const holdingRouter = express.Router();

holdingRouter.use("/holding", userAuth);

async function getAccount(userId) {

    const account = await Account.findOne({
        userId
    });

    if (!account) {
        throw new Error("Trading account not found.");
    }

    return account;

}

async function createOrder({
    userId,
    symbol,
    transactionType,
    quantity,
    price
}) {

    const order = new Order({
        userId,
        symbol,
        product: "CNC",
        transactionType,
        quantity,
        price,
        status: "EXECUTED"
    });

    await order.save();

}

async function debitTradingBalance(userId, amount) {

    await Account.findOneAndUpdate(
        {
            userId
        },
        {
            $inc: {
                tradingBalance: -amount
            }
        },
        {
            runValidators: true
        }
    );

}

async function creditTradingBalance(userId, amount) {

    await Account.findOneAndUpdate(
        {
            userId
        },
        {
            $inc: {
                tradingBalance: amount
            }
        },
        {
            runValidators: true
        }
    );

}

holdingRouter.get("/holding", async (req, res) => {

    try {

        const holdings = await Holding.find({
            userId: req.user._id
        }).sort({
            createdAt: -1
        });

        res.json({
            holdings
        });

    }
    catch (err) {

        res.status(400).json({
            message: err.message
        });

    }

});

holdingRouter.post("/holding/buy", async (req, res) => {

    try {

        const {
            symbol,
            quantity,
            price
        } = holdingValidator(req.body);

        const account = await getAccount(req.user._id);

        const totalAmount = quantity * price;

        if (account.tradingBalance < totalAmount) {
            throw new Error("Insufficient trading balance.");
        }

        let holding = await Holding.findOne({
            userId: req.user._id,
            symbol
        });

        if (!holding) {

            holding = new Holding({
                userId: req.user._id,
                symbol,
                quantity,
                averagePrice: price
            });

            await holding.save();

        }
        else {

            const totalQuantity =
                holding.quantity + quantity;

            const averagePrice =
                (
                    holding.averagePrice * holding.quantity +
                    quantity * price
                ) / totalQuantity;

            holding.quantity = totalQuantity;
            holding.averagePrice = averagePrice;

            await holding.save();

        }

        await debitTradingBalance(
            req.user._id,
            totalAmount
        );

        await createOrder({
            userId: req.user._id,
            symbol,
            transactionType: "BUY",
            quantity,
            price
        });

        res.json({
            message: "Shares bought successfully.",
            holding
        });

    }
    catch (err) {

        res.status(400).json({
            message: err.message
        });

    }

});

holdingRouter.post("/holding/sell", async (req, res) => {

    try {

        const {
            symbol,
            quantity,
            price
        } = holdingValidator(req.body);

        const holding = await Holding.findOne({
            userId: req.user._id,
            symbol
        });

        if (!holding) {
            throw new Error("No shares available to sell.");
        }

        if (quantity > holding.quantity) {
            throw new Error("Insufficient number of shares.");
        }

        const totalAmount = quantity * price;

        holding.quantity -= quantity;

        if (holding.quantity === 0) {

            await Holding.deleteOne({
                _id: holding._id
            });

        }
        else {

            await holding.save();

        }

        await creditTradingBalance(
            req.user._id,
            totalAmount
        );

        await createOrder({
            userId: req.user._id,
            symbol,
            transactionType: "SELL",
            quantity,
            price
        });

        res.json({
            message: "Shares sold successfully."
        });

    }
    catch (err) {

        res.status(400).json({
            message: err.message
        });

    }

});

module.exports = holdingRouter;