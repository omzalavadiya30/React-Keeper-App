import { TrashIcon } from '@heroicons/react/24/solid'

const Note = ({ title, content, onDelete, id, onEdit }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-md flex flex-col min-h-[7rem] max-w-xs w-full relative overflow-hidden transition-all duration-200 animate-fade-in">
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-500 to-purple-400 rounded-l-md" />
      <div className="pl-4">
        <h1 className="text-base font-extrabold mb-1 text-gray-900 break-words whitespace-pre-line">{title}</h1>
        <p className="text-sm text-gray-700 flex-1 mb-2 break-words whitespace-pre-line max-h-32 overflow-y-auto">{content}</p>
        <div className="flex gap-2 justify-end">
          <button 
            onClick={() => onEdit(id, { title, content })}
            className="text-blue-600 hover:text-purple-600 font-semibold text-sm px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(id)}
            className="text-red-500 hover:text-red-600 font-semibold text-sm px-2 py-1 rounded flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            <TrashIcon className="h-4 w-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Note