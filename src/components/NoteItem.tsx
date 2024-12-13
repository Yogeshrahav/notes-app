import React, { useState } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
}

interface NoteItemProps {
  note: Note;
  onUpdateNote: (id: string, updatedNote: Note) => void;
  onDeleteNote: (id: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onUpdateNote, onDeleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    onUpdateNote(note.id, { id: note.id, title, content });
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea"
          />
          <button onClick={handleSave} className="btn">
            Save
          </button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div className="actions">
            <button onClick={() => setIsEditing(true)} className="btn">
              Edit
            </button>
            <button onClick={() => onDeleteNote(note.id)} className="btn delete">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteItem;
