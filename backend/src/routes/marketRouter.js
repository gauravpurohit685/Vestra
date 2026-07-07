const express = require("express");

const marketRouter = express.Router();

const { marketData } = require("../service/marketService");

marketRouter.get("/market-data", (req, res) => {

    try {

        res.status(200).json({
            success: true,
            data: Object.values(marketData)
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch market data."
        });

    }

});

module.exports = marketRouter;