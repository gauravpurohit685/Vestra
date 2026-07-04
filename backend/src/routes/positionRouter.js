const express = require("express");

const Account = require("../models/accountSchema");
const Order = require("../models/orderSchema");
const Position = require("../models/positionSchema");

const userAuth = require("../middleware/userAuth");
const positionValidator = require("../validator/positionValidator");

const positionRouter = express.Router();

positionRouter.use("/position", userAuth);

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
        product: "MIS",
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

positionRouter.get("/position", async (req, res) => {

    try {

        const positions = await Position.find({
            userId: req.user._id
        }).sort({
            createdAt: -1
        });

        res.json({
            positions
        });

    }
    catch (err) {

        res.status(400).json({
            message: err.message
        });

    }

});

// buy positions

positionRouter.post("/position/buy", async (req, res) => {

    try {

        const {
            symbol,
            quantity,
            price
        } = positionValidator(req.body);

        const account = await getAccount(req.user._id);

        const totalAmount = quantity * price;

        if (account.tradingBalance < totalAmount) {
            throw new Error("Insufficient trading balance.");
        }

        let position = await Position.findOne({
            userId: req.user._id,
            symbol
        });

        if (!position) {

            position = new Position({
                userId: req.user._id,
                symbol,
                product: "MIS",
                quantity,
                averagePrice: price
            });

            await position.save();

        }
        else {

            const totalQuantity =
                position.quantity + quantity;

            const averagePrice =
                (
                    position.averagePrice * position.quantity +
                    price * quantity
                ) / totalQuantity;

            position.quantity = totalQuantity;
            position.averagePrice = averagePrice;

            await position.save();

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
            message: "Position bought successfully.",
            position
        });

    }
    catch (err) {

        res.status(400).json({
            message: err.message
        });

    }

});

// close a particular position

positionRouter.post("/position/close/:positionId", async (req, res) => {

    try {

        const { positionId } = req.params;

        const { price } = req.body;

        if (
            typeof price !== "number" ||
            Number.isNaN(price) ||
            price <= 0
        ) {
            throw new Error("Valid closing price is required.");
        }

        const position = await Position.findOne({
            _id: positionId,
            userId: req.user._id
        });

        if (!position) {
            throw new Error("Position not found.");
        }

        const {
            symbol,
            quantity,
            averagePrice
        } = position;

        const realisedPnL =
            (price - averagePrice) * quantity;

        // Credit complete selling amount

        await creditTradingBalance(
            req.user._id,
            quantity * price
        );

        // Create SELL order

        await createOrder({
            userId: req.user._id,
            symbol,
            transactionType: "SELL",
            quantity,
            price
        });

        // Delete Position

        await Position.deleteOne({
            _id: positionId,
            userId: req.user._id
        });

        res.json({

            message: "Position closed successfully.",

            realisedPnL,

            exitPrice: price,

            averagePrice,

            quantity

        });

    }
    catch (err) {

        res.status(400).json({
            message: err.message
        });

    }

});

// close all the positions

positionRouter.post("/position/closeall", async (req, res) => {

    try {

        const { prices } = req.body;

        /*
            prices = {
                INFY: 1894,
                TCS: 3876,
                RELIANCE: 3021
            }
        */

        const positions = await Position.find({
            userId: req.user._id
        });

        if (positions.length === 0) {
            throw new Error("No open positions.");
        }

        let totalPnL = 0;

        for (const position of positions) {

            const currentPrice = prices[position.symbol];

            if (
                typeof currentPrice !== "number" ||
                currentPrice <= 0
            ) {
                throw new Error(
                    `Current price missing for ${position.symbol}`
                );
            }

            const realisedPnL =
                (currentPrice - position.averagePrice) *
                position.quantity;

            totalPnL += realisedPnL;

            await creditTradingBalance(
                req.user._id,
                position.quantity * currentPrice
            );

            await createOrder({
                userId: req.user._id,
                symbol: position.symbol,
                transactionType: "SELL",
                quantity: position.quantity,
                price: currentPrice
            });

        }

        await Position.deleteMany({
            userId: req.user._id
        });

        res.json({

            message: "All positions closed successfully.",

            realisedPnL: totalPnL

        });

    }
    catch (err) {

        res.status(400).json({
            message: err.message
        });

    }

});

module.exports = positionRouter;