import express from "express";
// const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";



dotenv.config();
console.log(process.env.MONGO_URI);
const app = express();
connectDB();

app.use("/api/notes", notesRoutes);



app.listen(5001, () => {
    console.log("App started at port 5001");
});


//// drU8lnn4v6qVmAl1
//mongodb+srv://nadafcai_db_user:drU8lnn4v6qVmAl1@cluster0.4tsidxu.mongodb.net/?appName=Cluster0