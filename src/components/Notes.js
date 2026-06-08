import React, { useContext, useEffect, useState } from "react";
import notecontext from "../context/notes/notecontext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { useNavigate } from 'react-router-dom';
import { Toaster ,toast } from 'react-hot-toast';

const Notes = (props) => {
    const navigate = useNavigate();
    const { notes, getnotes, editnote } = useContext(notecontext);
    const [showModal, setShowModal] = useState(false);
    const [, setCurrentNote] = useState(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })



    useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token || token === "undefined" || token === "null" || token.trim() === "") {
        navigate("/login", { replace: true });
    } else {
        getnotes();
    }
}, [navigate, getnotes]);

    const updatenotes = (currentNote) => {
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        setCurrentNote(note);
        setShowModal(true);
    };

    const handleSave = () => {
        editnote(note.id, note.etitle, note.edescription, note.etag)
        setShowModal(false);
        toast.success("Note updated successfully");
    };


    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
            <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Private workspace</p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">Your Personal Notes</h1>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                        Capture ideas, tasks, and important details in one secure place.
                    </p>
                </div>
            </section>

            <Addnote />
            <Toaster />

            <section className="mt-8">
                <div className="mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap items-end justify-between ">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Collection</p>
                        <h2 className="mt-1 text-2xl font-bold text-slate-950">Your Notes</h2>
                    </div>
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-lg font-semibold flex justify-center text-gray-600">
                        {notes.length} {notes.length === 1 ? "Note" : "Notes"}
                    </span>
                </div>

                {notes.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900">No notes yet</h3>
                        <p className="mt-2 text-sm text-slate-500">Create your first note using the form above.</p>
                    </div>
                ) : (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {notes.map((note) => (
                        <Noteitem note={note} key={note._id} updatenotes={updatenotes} 
                        toast={props.toast} />
                    ))}
                </div>
                )}
            </section>
        
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
                    <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Edit note</p>
                            <h2 className="mt-1 text-2xl font-bold text-slate-950">Update details</h2>
                            <form className="mt-6 grid gap-4">
                                <div>
                                    <label htmlFor="etitle" className="mb-2 block text-sm font-semibold text-slate-700">Title</label>
                                    <input onChange={onchange} value={note.etitle} type="text" id="etitle" name="etitle" className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="" required minLength={4} />
                                </div>
                                <div>
                                    <label htmlFor="edescription" className="mb-2 block text-sm font-semibold text-slate-700">Description</label>
                                    <textarea id="edescription" name='edescription' onChange={onchange} value={note.edescription} rows="4" className="block w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" required minLength={4} />
                                </div>
                                <div>
                                    <label htmlFor="etag" className="mb-2 block text-sm font-semibold text-slate-700">Tag</label>
                                    <input type="text" id="etag" name='etag' onChange={onchange} value={note.etag} className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" required />
                                </div>
                            </form>
                        </div>
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={() => setShowModal(false)} className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">Cancel
                            </button>
                            <button
                                onClick={handleSave} disabled={note.etitle.length < 4 || note.edescription.length < 4} className="cursor-pointer rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300">Update note
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Notes;
