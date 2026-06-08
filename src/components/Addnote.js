import React from 'react'
import notecontext from "../context/notes/notecontext";
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';


const Addnote = (props) => {
    const context = useContext(notecontext)
    const { addnote } = context
    const [loading, setLoading] = useState(false);
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleclick = (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            addnote(note.title, note.description, note.tag);
            setNote({ title: "", description: "", tag: "" })
            toast.success("Note added successfully");
        }
        catch (error) {
            console.error("Add note error:", error);
            toast.error("An error occurred while adding the note. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <section className="rounded-2xl border border-slate bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">New note</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-950">Add a note</h2>
                <p className="mt-2 text-sm text-slate-500">Save quick ideas, tasks, and useful details in your notebook.</p>
            </div>

            <form className="grid gap-5">
                <div>
                    <label htmlFor="title" className="mb-2 block text-sm font-semibold text-slate-700">Title</label>
                    <input
                        onChange={onchange}
                        value={note.title}
                        type="text"
                        id="title"
                        name="title"
                        minLength={4}
                        className="block w-full rounded-xl border border-2px-black bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        placeholder="Project plan"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="mb-2 block text-sm font-semibold text-slate-700">Description</label>
                    <textarea
                        id="description"
                        value={note.description}
                        name='description'
                        minLength={4}
                        onChange={onchange}
                        rows="4"
                        className="block w-full resize-none rounded-xl border border-2px-black bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        placeholder="Write the important details here..."
                        required
                    />
                </div>

                <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                        <label htmlFor="tag" className="mb-2 block text-sm font-semibold text-slate-700">Tag</label>
                        <input
                            type="text"
                            id="tag"
                            value={note.tag}
                            name='tag'
                            onChange={onchange}
                            minLength={4}
                            className="block w-full rounded-xl border border-2px-black bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                            placeholder="Work"
                            required
                        />
                    </div>

                    <button
                        onClick={handleclick}
                        disabled={note.title.length < 4 || note.description.length < 4}
                        type="submit"
                        className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                        {loading ? "Adding..." : "Add note"}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Addnote
