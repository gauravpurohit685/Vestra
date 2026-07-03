const express  = require("express");
const Account = require("../models/accountSchema");
const Order = require("../models/orderSchema");
const Position = require("../models/positionSchema");
const Holding = require("../models/holdingSchema");

const userAuth = require("../middleware/userAuth");
const positionValidator = require("../validator/positionValidator");

const positionRouter = express.Router();
positionRouter.use("/position", userAuth);

positionRouter.get("/position", async (req, res) => {
    try{
        const positions = await Position.find({
                    userId: req.user._id
                }).sort({ createdAt: -1 });
        
        res.json({positions});
    }
    catch(err){
        res.status(400).json({
            message: "Could not get the positions"
        })
    }
});

positionRouter.post("/position/buy", async (req, res) => {
    try{
        const {symbol, quantity, price} = positionValidator(req.body);

        const position = await Position.findOne({
            userId: req.user._id,
            symbol,
            transactionType: "BUY"
        })
        
        const account = await Account.findOne({
            userId: req.user._id
        })

        if(!account){
            throw new Error("Account doesn't exist")
        }
        
        if(account.tradingBalance < quantity* price){
            throw new Error("Inadequate funds!")
        }

        if(!position){
            const newPosition = new Position({
                userId: req.user._id,
                symbol,
                product: "MIS",
                quantity,
                averagePrice: price,
                transactionType: "BUY"
            })

            await newPosition.save();

            const newAccount = {
                tradingBalance: account.tradingBalance - (quantity * price)
            }
            
            await Account.findOneAndUpdate({
                userId: req.user._id
            }, newAccount)

            const newOrder = new Order({
                    userId: req.user._id,
                    symbol,
                    product: "MIS",
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

        const newPosition = {
            userId: req.user._id,
            symbol,
            quantity: quantity + position.quantity,
            averagePrice: (position.averagePrice*position.quantity + price*quantity)/(quantity + position.quantity)
        }

        await Position.findOneAndUpdate({
            userId: req.user._id,
            symbol,
            transactionType: "BUY"
        }, newPosition);

        const newAccount = {
            tradingBalance: account.tradingBalance - (quantity * price)
        }
        
        await Account.findOneAndUpdate({
            userId: req.user._id
        }, newAccount)
        
        const newOrder = new Order({
            userId: req.user._id,
            symbol,
            product: "MIS",
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
});


positionRouter.post("/position/sell", async (req, res) => {
    try{
        const {symbol, quantity, price} = positionValidator(req.body);

        const position = await Position.findOne({
            userId: req.user._id,
            symbol,
            transactionType: "SELL"
        })

        const holding = await Holding.findOne({
            userId: req.user._id,
            symbol
        })

        const account = await Account.findOne({
            userId: req.user._id
        })

        if(!account){
            throw new Error("Account does not exist")
        }

        if(!holding){
            throw new Error("Holding could not be found!")
        }

        if(!position){
            if(quantity > holding.quantity){
                throw new Error("Inadequate number of shares");
            }

            const newPosition = new Position({
                userId: req.user._id,
                symbol,
                product: "MIS",
                quantity,
                averagePrice: price,
                transactionType: "SELL"
            })

            await newPosition.save();
            
            const newAccount = {
                tradingBalance: account.tradingBalance + (quantity * price)
            }
            
            await Account.findOneAndUpdate({
                userId: req.user._id
            }, newAccount)

            const newOrder = new Order({
                    userId: req.user._id,
                    symbol,
                    product: "MIS",
                    transactionType: "SELL",
                    quantity,
                    price,
                    status: "EXECUTED"
                })
            
                await newOrder.save();
            
                res.json({
                    message: "Shares Sold successfully!"
                })
            
            return;
        }

        if(position.quantity + quantity > holding.quantity){
            throw new Error("Inadequate number of shares!")
        }

        const newPosition = {
            userId: req.user._id,
            symbol,
            quantity: quantity + position.quantity,
            averagePrice: (position.averagePrice*position.quantity + price*quantity)/(quantity + position.quantity)
        }

        await Position.findOneAndUpdate({
            userId: req.user._id,
            symbol,
            transactionType: "SELL"
        }, newPosition)

        const newAccount = {
            tradingBalance: account.tradingBalance + (quantity * price)
        }
            
        await Account.findOneAndUpdate({
            userId: req.user._id
        }, newAccount)

        const newOrder = new Order({
                userId: req.user._id,
                symbol,
                product: "MIS",
                transactionType: "SELL",
                quantity,
                price,
                status: "EXECUTED"
        })
        
        await newOrder.save();
            
        res.json({
                message: "Shares Sold successfully!"
        })
    }
    catch(err){
        res.status(400).json({
            message: "Error updating the Sold position" + err.message
        })
    }
});


// below are the routes to close the positions!!

positionRouter.post("/position/close/:closeId", async (req, res) => {
    try{
        const closeId = req.params;

        const position  = await Position.findOne({
            _id: closeId,
            userId: req.user._id
        });

        if(!position){
            throw new Error("Position could not be found!")
        }

        const {symbol, quantity, averagePrice, transactionType} = position;

        if(transactionType === "BUY"){
            const holding = await Holding.findOne({
                userId: req.user._id,
                symbol
            })
            
            if(!holding){
                const newHolding = new Holding({
                    userId: req.user._id,
                    symbol,
                    quantity,
                    averagePrice
                })

                newHolding.save();

                res.json({
                    message: "Position closed successfully!"
                })

                return;
            }

            const newHolding = {
                userId: req.user._id,
                symbol,
                quantity: quantity + holding.quantity,
                averagePrice: (holding.averagePrice*holding.quantity + averagePrice*quantity)/(quantity + holding.quantity)
            }

            await Holding.findOneAndUpdate({
                userId: req.user._id,
                symbol
            }, newHolding)

            await Position.findOneAndDelete({
                _id: closeId,
                userId: req.user._id
            })

            res.json({
                message: "Position closed successfully!"
            })
        }
        else{
            const holding = await Holding.findOne({
                userId: req.user._id,
                symbol
            })

            if(!holding){
                throw new Error("Sorry the holding could not be found!")
            }

            if(quantity > holding.quantity){
                throw new Error("Inadequate number of shares!")
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
            }
            else{
                await Holding.findOneAndDelete({
                    userId: req.user._id,
                    symbol
                })
            }

            await Position.findOneAndDelete({
                _id: closeId,
                userId: req.user._id
            })
            
            res.json({
                message: "Position closed successfully"
            })
        }
    }
    catch(err){
        res.status(400).json({
            message: "Position could not be closed: " + err.message
        })
    }
})