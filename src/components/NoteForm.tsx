import React, { useState } from "react";

interface NoteFormProps {
  onAddNote: (note: { id: string; title: string; content: string }) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAddNote({
        id: Date.now().toString(),
        title,
        content,
      });
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="textarea"
      />
      <button type="submit" className="btn">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
