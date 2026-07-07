const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const http = require("http");
const {Server} = require("socket.io");
const WebSocket = require("ws");

const connectDB = require("./src/config/database");
const authRouter = require("./src/routes/authRouter");
const positionRouter = require("./src/routes/positionRouter");
const profileRouter = require("./src/routes/profileRouter");
const holdingRouter = require("./src/routes/holdingRouter");
const bankRouter = require("./src/routes/bankRouter");
const orderRouter = require("./src/routes/orderRouter");

require("dotenv").config();

const allowedOrigins = [
    "http://localhost:1234", // Landing
    "http://localhost:3000"  // Dashboard
];

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        credentials: true,
        methods: ["GET", "POST", "PATCH", "DELETE"]
    }
});

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
        methods: ["GET", "POST", "PATCH", "DELETE"]
    })
);


app.use(express.json());
app.use(cookieParser());


app.use("/", authRouter);
app.use("/", bankRouter);
app.use("/", holdingRouter);
app.use("/", orderRouter);
app.use("/", positionRouter);
app.use("/", profileRouter);

io.on("connection", (socket) => {
    console.log("Connected: ", socket.id);

    socket.on("disconnect", () => {
        console.log("Disconnected: ", socket.id);
    })
});

const finnhubSocket = new WebSocket(
    `wss://ws.finnhub.io?token=${process.env.FINNHUB_API_KEY}`
);

const companies = [
    "AAPL",
    "MSFT",
    "KO",
    "PEP",
    "WMT",
    "MCD",
    "JNJ",
    "PG",
    "V",
    "MA",
    "IBM",
    "ORCL",
    "CSCO",
    "DIS",
    "NKE"
];

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

    if (parsedData.type !== "trade")
        return;

    io.emit("market-update", parsedData.data);

});

finnhubSocket.on("error", (err) => {

    console.log(err);

});

finnhubSocket.on("close", () => {
    console.log("Finnhub Websocket disconneted successfully!");
});


connectDB().then(() => {
    console.log("Database connection established successfully!");
    server.listen(process.env.PORT, () => {
        console.log("The server is listening successfully!");
    })
})
.catch((err) => {
    console.log("Sorry the following error occured: " , err);
})