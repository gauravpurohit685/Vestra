const express = require("express");
const Account = require("../models/accountSchema");
const userAuth = require("../middleware/userAuth");
const bankValidator = require("../validator/bankValidator");

const bankRouter = express.Router();

bankRouter.use("/bank", userAuth);

bankRouter.get("/bank", async (req, res) => {
    try{
        const account = await Account.findOne({
            userId: req.user._id
        })

        res.json({account});
    }
    catch(err){
        res.status(400).json({
            message: "Error getting the account detail!"
        })
    }
})

bankRouter.patch("/bank/withdraw", async (req, res) => {
    try{
        const {amount} = bankValidator(req.body);

        const account = await Account.findOne({
            userId: req.user._id
        })

        if(!account){
            throw new Error("The account could not be found")
        }

        if(amount > account.tradingBalance){
            throw new Error("Inadequate amount!");
        }

        await Account.findOneAndUpdate({
            userId: req.user._id
        }, {
            $inc: {
                tradingBalance: -amount,
                cashBalance: amount
            }
        })

        res.json({
            message: "Money successfully withdrawn"
        })
    }
    catch(err){
        res.status(400).json({
            message: "Error withdrawing the money" + err.message
        })
    }
})

bankRouter.patch("/bank/deposit", async (req, res) => {
    try{
        const {amount} = bankValidator(req.body);

        const account = await Account.findOne({
            userId: req.user._id
        })

        if(!account){
            throw new Error("The account could not be found")
        }

        if(amount > account.cashBalance){
            throw new Error("Inadequate amount!");
        }

        await Account.findOneAndUpdate({
            userId: req.user._id
        }, {
            $inc: {
                tradingBalance: amount,
                cashBalance: -amount
            }
        })

        res.json({
            message: "Money successfully deposited"
        })
    }
    catch(err){
        res.status(400).json({
            message: "Error Depositing the money" + err.message
        })
    }
})