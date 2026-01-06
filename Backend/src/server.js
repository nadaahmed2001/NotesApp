import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/ratelimiter.js";
import path from "path";
import { fileURLToPath } from "url";



dotenv.config();
const PORT = process.env.PORT || 5001;
// console.log(process.env.MONGO_URI);
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);//returns the backend directory

//middleware
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://notes-app-ecru-six.vercel.app",
        "https://notesapp-0asj.onrender.com"
    ],
    credentials: true
}));
app.use(express.json());
app.use(ratelimiter)
app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {

    const frontendDistPath = path.resolve(__dirname, "..", "..", "Frontend", "dist");

    //returns the frontend/dist directory for serving static files
    //serving static files means serving the built React app (frontend)
    app.use(express.static(frontendDistPath));


    //if we got any route other than API routes, serve the React app
    app.get("*", (req, res) => {
        res.sendFile(path.join(frontendDistPath, "index.html"));
    });

}
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});






