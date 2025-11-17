import express from "express";
// const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/ratelimiter.js";



dotenv.config();
const PORT = process.env.PORT || 5001;
// console.log(process.env.MONGO_URI);
const app = express();


//middleware
app.use(express.json());
app.use(ratelimiter)
app.use("/api/notes", notesRoutes);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});






