const express = require("express");
const Order = require("../models/orderSchema");
const userAuth = require("../middleware/userAuth");

const orderRouter = express.Router();
orderRouter.use("/order", userAuth);

orderRouter.get("/order", async (req, res) => {
    try{
        const orders = await Order.find({
            userId: req.user._id
        }).sort({ createdAt: -1 });

        res.json({orders});
    }
    catch(err){
       res.status(400).json({
        message: "Could not get the orders: " + err.message
       })
    }
})

module.exports = orderRouter