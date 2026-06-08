import React, { useCallback, useState } from "react";
import Notecontext from "./notecontext";
import API_BASE_URL from "../../config/api";

const NoteState = (props) => {
    const initialnotes = [


    ]
    const [notes, setNotes] = useState(initialnotes)

    //get all notes
    const getnotes = useCallback(async () => {
        //TODO Api call
        const response = await fetch(`${API_BASE_URL}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        const json = await response.json();

        setNotes(Array.isArray(json) ? json : json.notes || []);


    }, [])


    //Add a note
    const addnote = async (title, description, tag) => {

        try {
            const response = await fetch(`${API_BASE_URL}/api/notes/addnote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({ title, description, tag })
            });

            const newNote = await response.json();
            setNotes(notes.concat(newNote));
        } catch (error) {
            console.error("Error adding note:", error);
        }

    }

    //Delete a note
    const deletenote = async (id) => {
        //TODO Api call
        const response = await fetch(`${API_BASE_URL}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        const json = await response.json();

        if (response.ok) {
            setNotes(notes.filter((note) => note._id !== id));
        } else {
            console.error("Failed to delete:", json.error || json);
        }

    }
    //Edit a note
    const editnote = async (id, title, description, tag) => {
        //TODO Api call
        const response = await fetch(`${API_BASE_URL}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag })
        });

        let newnotes = JSON.parse(JSON.stringify(notes))

        //logic to edit in client
        for (let index = 0; index < newnotes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newnotes[index].title = title
                newnotes[index].description = description
                newnotes[index].tag = tag
                break;
            }

        }
        setNotes(newnotes)

    }
    return (
        <Notecontext.Provider value={{ notes, addnote, deletenote, editnote, getnotes }}>
            {props.children}
        </Notecontext.Provider>

    )
}

export default NoteState;
