const express = require("express");
const User = require("../models/userSchema");
const Account = require("../models/accountSchema");
const Holding = require("../models/holdingSchema");
const Position = require("../models/positionSchema");
const Order = require("../models/orderSchema");

const userAuth = require("../middleware/userAuth");
const profileValidator = require("../validator/profileValidator");

const profileRouter = express.Router();

profileRouter.use("/profile", userAuth);

// route to get the profile data
profileRouter.get("/profile", async (req, res) =>{
        try{    
            const {firstName, lastName, emailId} = req.user;

            const [account, holdings, positions, orders] = await Promise.all([
                Account.findOne({
                    userId: req.user._id
                }),

                Holding.find({
                    userId: req.user._id
                }),

                Position.find({
                    userId: req.user._id
                }),

                Order.find({
                    userId: req.user._id
                })
            ]);

            res.json(
                    {user: {firstName, lastName, emailId},
                    account: account,
                    stats: {
                        holdings: holdings.length,
                        positions: positions.length,
                        orders: orders.length
                    }
            });
        }
        catch(err){
            res.status(400).json({
                message: "Error getting the profile: " + err.message
            });
        }
    }
);

// route to update the profile data
profileRouter.patch("/profile", async (req, res) => {
    try{
        const allowedUpdates = ["firstName","lastName"];
        const isUpdateallowed = Object.keys(req.body).every((k) => allowedUpdates.includes(k));

        if(!isUpdateallowed){
            throw new Error("Update not allowed!");
        }

        profileValidator(req.body);

        await User.findByIdAndUpdate(req.user._id, req.body);
        res.json({
            message: "Data updated successfully!"
        });

    }
    catch(err){
        res.status(400).send({
            message: "Error updating the user: " + err.message
        });
    }
});

module.exports = profileRouter;