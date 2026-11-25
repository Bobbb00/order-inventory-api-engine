import "dotenv/config";
import app from "./app.js";
import { prisma } from "./config/prisma.js";


const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server Berjalan di http://localhost:${PORT}`);
})

process.on("SIGINT", async () => {
    console.log("\nMematikan server dengan aman...");
    await prisma.$disconnect();
    server.close(() => {
        console.log(`Server resmi ditutup.`);
        process.exit(0);
    })
})