import React from "react"
import Heading from "./Heading.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note"
import notes from "../notes"

function App() {
    return (
    <div>
    <Heading />
    {notes.map(note => ( <Note key = {note.id} title = {note.title} content = {note.content} />))}
    <Footer />
    </div>
    );
};

export default App;
