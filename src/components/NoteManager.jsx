import React, { useState } from 'react'
import CreateArea from './CreateArea';
import Note from './Note';

const NoteManager = () => {
    const [notes, setNotes]= useState([]);
    const [editingNote, setEditingNote] = useState(null);

    const addNote = (note) => {
        setNotes(prev => [...prev, note]);
        setEditingNote(null);
    }

    const updateNote = (note) => {
        setNotes(prev => prev.map((n, index) => (index === editingNote.id ? note : n)));
        setEditingNote(null);
    }

    const deleteNote = (id) => {
        setNotes((prev) => prev.filter((_, index) => index !== id));
        if (editingNote && editingNote.id === id) {
            setEditingNote(null);
        }
    };

    const startEdit = (id, note) => {
        setEditingNote({ id, ...note });
    };

  return (
    <div className="w-full px-2 md:px-6">
      <CreateArea 
        onAdd={addNote} 
        onUpdate={updateNote}
        editingNote={editingNote}
        onCancelEdit={() => setEditingNote(null)}
      />
      <div className="mt-12 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
        {
          notes.map((note, index) => (
            <Note 
              key={index} 
              id={index} 
              title={note.title} 
              content={note.content} 
              onDelete={deleteNote} 
              onEdit={startEdit}
            />
          ))
        }
      </div>
    </div>
  )
}

export default NoteManager