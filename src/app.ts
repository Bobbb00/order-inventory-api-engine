import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Capstone RESTful API Engine is Running..."
    })
})

app.use(errorHandler);

export default app;