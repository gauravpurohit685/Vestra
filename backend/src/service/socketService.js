const WebSocket = require("ws");

const {companies} = require("../util/constant");
const {marketData} = require("./marketService");


const connectToWebsocket = (io) => {
    io.on("connection", (socket) => {
        console.log("Connected: ", socket.id);

        socket.on("disconnect", () => {
            console.log("Disconnected: ", socket.id);
        })
    });

    const finnhubSocket = new WebSocket(
        `wss://ws.finnhub.io?token=${process.env.FINNHUB_API_KEY}`
    );


    finnhubSocket.on("open", () => {

        console.log("Connected to Finnhub");

        companies.forEach(symbol => {

            finnhubSocket.send(
                JSON.stringify({
                    type: "subscribe",
                    symbol
                })
            );

        });

    });

    finnhubSocket.on("message", (message) => {

        const parsedData = JSON.parse(message);

        if (
            parsedData.type !== "trade" ||
            !parsedData.data ||
            parsedData.data.length === 0
        ) {
            return;
        }

        parsedData.data.forEach((trade) => {

            const stock = marketData[trade.s];

            if (!stock)
                return;

            const currentPrice = trade.p;

            stock.currentPrice = currentPrice;

            stock.change = Number(
                (currentPrice - stock.previousClose).toFixed(2)
            );

            stock.percentChange = Number(
                (
                    ((currentPrice - stock.previousClose) /
                        stock.previousClose) *
                    100
                ).toFixed(2)
            );

            stock.high = Math.max(stock.high, currentPrice);

            stock.low = Math.min(stock.low, currentPrice);

            stock.volume = trade.v;

            stock.timestamp = trade.t;

        });

        console.log(parsedData);

        io.emit("market-update", parsedData.data);

    });

    finnhubSocket.on("error", (err) => {

        console.log(err);

    });

    finnhubSocket.on("close", () => {
        console.log("Finnhub Websocket disconneted successfully!");
    });
}

module.exports = connectToWebsocket;