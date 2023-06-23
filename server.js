import express from "express";
import {APP_PORT, DB_URL} from "./config";
const app = express();
import router from "./routes";
import mongoose from "mongoose";
import errorHandler from "./middlewares/errorHandler";

// database connection
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", ()=> console.log("error"));
db.once("open", ()=> console.log("connected"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/v1", router);





// Error Handler
app.use(errorHandler);
app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
});