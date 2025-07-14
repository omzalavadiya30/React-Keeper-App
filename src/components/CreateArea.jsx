import { useState, useEffect } from 'react'
import { PlusIcon, ExclamationCircleIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

const CreateArea = ({ onAdd, onUpdate, editingNote, onCancelEdit }) => {
  const [note, setNote] = useState({title: "", content: ""});
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (editingNote) {
      setNote({ title: editingNote.title, content: editingNote.content });
    } else {
      setNote({ title: "", content: "" });
    }
  }, [editingNote]);

  const handleChange= (e) => {
    const {name, value}= e.target;
    setNote((prev) => ({...prev, [name]: value}));
    if (showAlert) setShowAlert(false);
  }

  const submitNote= () => {
    if(!note.title.trim() || !note.content.trim()) {
      setShowAlert(true);
      return;
    }
    
    if (editingNote) {
      onUpdate(note);
    } else {
      onAdd(note);
    }
    setNote({title: "", content: ""});
    setShowAlert(false);
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-lg p-4 mt-8 relative shadow-lg flex group transition-transform">
      <div className="pl-4 w-full">
        {editingNote && (
          <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded bg-blue-50 text-blue-700 text-sm font-medium">
            <span>✏️ Editing: {editingNote.title}</span>
          </div>
        )}
        {showAlert && (
          <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded bg-red-100 text-red-700 text-sm font-medium">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            Please fill in both title and content
          </div>
        )}
        <input  className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all" type="text" name='title' placeholder='Title' value={note.title} onChange={handleChange} />
        <textarea name="content" className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all" placeholder='Take a note...' rows="3" value={note.content} onChange={handleChange} />
        <div className="flex gap-2 justify-end mt-2">
          {editingNote && (
            <>
              <button 
                onClick={onCancelEdit} 
                className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-2 rounded transition-all flex items-center gap-1 text-sm"
              >
                <ArrowUturnLeftIcon className="h-5 w-5" />
                Cancel
              </button>
              <button 
                type='submit' 
                className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-3 py-2 rounded transition-all flex items-center gap-1 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300' 
                onClick={submitNote}
                aria-label='Update note'
              >
                <PlusIcon className="h-5 w-5" />
                Update
              </button>
            </>
          )}
          {!editingNote && (
            <button 
              type='submit' 
              className='absolute -bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full w-12 h-12 shadow-lg transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300 group-hover:scale-110' 
              onClick={submitNote}
              aria-label='Add note'
            >
              <PlusIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateArea