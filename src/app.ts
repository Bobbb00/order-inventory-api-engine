import "dotenv/config";
import express from "express";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Capstone RESTful API Engine is Running..."
    })
})

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
})

export default app;