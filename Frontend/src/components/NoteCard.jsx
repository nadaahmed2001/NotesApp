import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
    const handleDelete = async (e, id) => {
        e.preventDefault(); //prevents the default behavior of the button (go to the note page)
        if (!window.confirm("Are you sure you want to delete this note?")) return;
        try {
            const response = await api.delete(`/notes/${id}`);
            // console.log(response);
            toast.success("Note deleted successfully");
            //“Update the notes state by removing the deleted note from the array.”
            setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));

        } catch (error) {
            console.log(error);
            toast.error("Could not delete note");
        }
    }
    return (
        <Link to={`/note/${note._id}`}
            className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#7480ff]"
        >
            <div className="card-body">
                <h3 className="card-title text-base-content">{note.title}</h3>
                <p className="text-base-content/70 line-clamp-3">{note.content}</p>
                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-sm text-base-content/60">
                        {formatDate(new Date(note.createdAt))}
                    </span>
                    <div className="flex items-center gap-1">
                        {/* Edit button */}
                        <PenSquareIcon className="size-4"

                        />
                        {/* Delete buttun */}
                        <button className="btn btn-ghost btn-xs text-error"
                            onClick={(e) => handleDelete(e, note._id)}
                        >
                            <Trash2Icon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default NoteCard