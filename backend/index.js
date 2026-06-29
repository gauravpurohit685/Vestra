const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/config/database");
const authRouter = require("./src/routes/authRouter");

const app = express();

app.use(
    cors({
        origin: "http://localhost:1234",
        credentials: true,
        methods: ["GET", "POST", "PATCH", "DELETE"]
    })
);


app.use(express.json());
app.use(cookieParser());


app.use("/", authRouter);


connectDB().then(() => {
    console.log("Database connection established successfully!");
    app.listen(process.env.PORT, () => {
        console.log("The server is listening successfully!");
    })
})
.catch((err) => {
    console.log("Sorry the following error occured: " , err);
})