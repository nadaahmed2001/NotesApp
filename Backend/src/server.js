import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/ratelimiter.js";



dotenv.config();
const PORT = process.env.PORT || 5001;
// console.log(process.env.MONGO_URI);
const app = express();


//middleware
if (process.env.NODE_ENV !== "production") {
    // Allow all origins in development
    app.use(cors({ origin: "*", }));
}
app.use(express.json());
app.use(ratelimiter)
app.use("/api/notes", notesRoutes);




connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});






