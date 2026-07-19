const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const http = require("http");
const {Server} = require("socket.io");

const connectDB = require("./src/config/database");


const authRouter = require("./src/routes/authRouter");
const positionRouter = require("./src/routes/positionRouter");
const profileRouter = require("./src/routes/profileRouter");
const holdingRouter = require("./src/routes/holdingRouter");
const bankRouter = require("./src/routes/bankRouter");
const orderRouter = require("./src/routes/orderRouter");
const marketRouter = require("./src/routes/marketRouter");

const {marketData, initializeMarketData} = require("./src/service/marketService");
const connectToWebsocket = require("./src/service/socketService");

require("dotenv").config();

const allowedOrigins = [
    "https://vestra-frontend-two.vercel.app", // Landing
    "https://vestra-eta.vercel.app"  // Dashboard
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
app.use("/", marketRouter);




connectDB().then(async () => {
    console.log("Database connection established successfully!");

    await initializeMarketData();

    connectToWebsocket(io);

    server.listen(process.env.PORT, () => {
        console.log("The server is listening successfully!");
    })
})
.catch((err) => {
    console.log("Sorry the following error occured: " , err);
})