import mongoose from "mongoose";

//1-create a schema
const noteschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },

},
    { timestamps: true }//createdAt, updatedAt
);

//2-model based off that schema
const Note = mongoose.model("Note", noteschema)

export default Note
