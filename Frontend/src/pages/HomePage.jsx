import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound';
import RateLimitedUI from './RateLimitedUI';
import { useState } from 'react';
import axios from 'axios';



const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNotes = async (set) => {
            try {
                // console.log("Fetching notes...");
                const res = await axios.get("/api/notes")
                // console.log("Notes: ", res.data);
                setNotes(res.data);
                setIsRateLimited(false);
            } catch (error) {
                console.log("Error fetching notes: ", error);
                if (error.response?.status === 429) {
                    setIsRateLimited(true); // Show rate limit UI because of too many requests
                } else {
                    toast.error("Failed to load notes");
                }
            } finally {
                setLoading(false);

            }
        };
        getNotes();
    }, []);


    return (
        <div className='="min-h-screen flex flex-col'>
            <Navbar />
            {isRateLimited && <RateLimitedUI />}

            {/* Notes */}
            <div className='max-w-7xl mx-auto p-4 mt-6'>

                {/* //Loading */}
                {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}

                {/* //No notes */}
                {!loading && notes.length === 0 && !isRateLimited && <NotesNotFound />}

                {/* //Notes fetched */}
                {notes.length > 0 && !isRateLimited && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {notes?.map(note => (
                            <NoteCard key={note._id} note={note} setNotes={setNotes} />
                            //set notes to empty array after deleting a note
                        ))}

                    </div>

                )}

            </div>


        </div>
    )
}

export default HomePage