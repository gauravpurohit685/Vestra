const express = require("express");
const Holding = require("../models/holdingSchema");
const Account = require("../models/accountSchema");
const Order = require("../models/orderSchema");

const userAuth = require("../middleware/userAuth");

const holdingValidator = require("../validator/holdingValidator");

const holdingRouter = express.Router();
holdingRouter.use("/holding", userAuth);

holdingRouter.get("/holding", async(req, res) => {
    try{
        const holdings = await Holding.find({
            userId: req.user._id
        }).sort({ createdAt: -1 });

        res.json({holdings});
    }
    catch(err){
        res.status(400).json(
            {message: "Error getting the holdings: " + err.message}
        );
    }
});

holdingRouter.post("/holding/buy", async(req, res) => {
    try{
        const {symbol, quantity, price} = holdingValidator(req.body);

        const holding = await Holding.findOne({
            userId: req.user._id,
            symbol
        })

        const account = await Account.findOne({
            userId: req.user._id
        })

        if(account.tradingBalance < quantity* price){
            throw new Error("Inadequate funds!")
        }

        if(!holding){
            const newHolding = new Holding({
                userId: req.user._id,
                symbol,
                quantity,
                averagePrice: price
            })

            await newHolding.save();


            const newAccount = {
                tradingBalance: account.tradingBalance - (quantity * price)
            }

            await Account.findOneAndUpdate({
                userId: req.user._id
            }, newAccount)


            const newOrder = new Order({
                userId: req.user._id,
                symbol,
                product: "CNC",
                transactionType: "BUY",
                quantity,
                price,
                status: "EXECUTED"
            })

            await newOrder.save();

            res.json({
                message: "Shares Bought successfully!"
            })

            return;
        }

        const newHolding = {
            userId: req.user._id,
            symbol,
            quantity: quantity + holding.quantity,
            averagePrice: (holding.averagePrice*holding.quantity + price*quantity)/(quantity + holding.quantity)
        }

        await Holding.findOneAndUpdate({
            userId: req.user._id,
            symbol
        }, newHolding);

        

        const newAccount = {
            tradingBalance: account.tradingBalance - (quantity * price)
        }

        await Account.findOneAndUpdate({
            userId: req.user._id
        }, newAccount)

        const newOrder = new Order({
                userId: req.user._id,
                symbol,
                product: "CNC",
                transactionType: "BUY",
                quantity,
                price,
                status: "EXECUTED"
            })

            await newOrder.save();

        res.json({
            message: "Shares Bought successfully!"
        })

    }
    catch(err){
        res.status(400).json({
            message: "Error Buying the shares!" + err.message
        });
    }
})


holdingRouter.post("/holding/sell", async(req, res) => {
    try{
        const {symbol, quantity, price} = holdingValidator(req.body);


        const holding = await Holding.findOne({
            userId: req.user._id,
            symbol
        })

        if(!holding){
            throw new Error("No shares to sell!");
        }

        if(quantity > holding.quantity){
            throw new Error("Inadequate Number of Shares");
        }

        else if(quantity < holding.quantity){

            await Holding.findOneAndUpdate({
                userId: req.user._id,
                symbol
            }, {
                userId: req.user._id,
                symbol,
                quantity: holding.quantity - quantity,
                averagePrice: holding.averagePrice
            });

            const account = await Account.findOne({
                userId: req.user._id
            })

            const newAccount = {
                tradingBalance: account.tradingBalance + (quantity * price)
            }

            await Account.findOneAndUpdate({
                userId: req.user._id
            }, newAccount)

            const newOrder = new Order({
                userId: req.user._id,
                symbol,
                product: "CNC",
                transactionType: "SELL",
                quantity,
                price,
                status: "EXECUTED"
            })

            await newOrder.save();

            res.json({
                message: "Shares sold successfully!" 
            })
        }
        else{
            await Holding.findOneAndDelete({
                userId: req.user._id,
                symbol
            })

            const account = await Account.findOne({
                userId: req.user._id
            })

            const newAccount = {
                tradingBalance: account.tradingBalance + (quantity * price)
            }

            await Account.findOneAndUpdate({
                userId: req.user._id
            }, newAccount)

            const newOrder = new Order({
                userId: req.user._id,
                symbol,
                product: "CNC",
                transactionType: "SELL",
                quantity,
                price,
                status: "EXECUTED"
            })

            await newOrder.save();

            res.json ({
                message: "Shares sold successfully!" 
            })
        }

    }
    catch(err){
        res.status(400).json({
            message: "Error selling the shares!" + err.message
        });
    }
})