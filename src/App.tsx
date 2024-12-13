import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteItem from "./components/NoteItem";
import "./styles.css";

interface Note {
  id: string;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addNote = (note: Note) => {
    setNotes([note, ...notes]);
  };

  const updateNote = (id: string, updatedNote: Note) => {
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteForm onAddNote={addNote} />
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="notes-list">
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onUpdateNote={updateNote}
            onDeleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
