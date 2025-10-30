import express from "express";
import { getAllNotes } from "../controllers/notesControllers";
import { createNote } from "../controllers/notesControllers";
import { updateNote } from "../controllers/notesControllers";
import { deleteNote } from "../controllers/notesControllers";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router; 
