import notecontext from "../context/notes/notecontext";
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
const Noteitem = (props) => {
    const context = useContext(notecontext);
    const { deletenote } = context;
    const { note, updatenotes } = props;
    return (
        <article className="flex min-h-56 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
            <div>
                <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="max-w-[70%] truncate rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                        {note.tag || "General"}
                    </span>
                    <div className="flex gap-1">
                        <button
                            type="button"
                            title="Edit note"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-blue-700"
                            onClick={() => {
                                updatenotes(note);
                            }}
                        >
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button
                            type="button"
                            title="Delete note"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-red-50 hover:text-red-700"
                            onClick={() => {
                                deletenote(note._id); toast.success("Note deleted successfully");
                            }}
                        >
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                    </div>
                </div>

                <h3 className="line-clamp-2 text-lg font-bold text-slate-950">
                    {note.title}
                </h3>
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">
                    {note.description}
                </p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4 text-xs font-medium text-slate-400">
                Personal note
            </div>
        </article>
    )
}

export default Noteitem
