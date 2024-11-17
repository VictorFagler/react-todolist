import React, { useState } from "react";
import { FaEdit, FaCheck } from "react-icons/fa";

const Todo = ({ id, title, desc, completed, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);

  const handleEdit = (e) => {
    e.stopPropagation();

    if (isEditing) {
      if (newTitle && newDesc) {
        onEdit(id, newTitle, newDesc);
      } else {
        console.log("Title and Description cannot be empty!");
        return;
      }
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  const handleToggle = (e) => {
    if (!isEditing) {
      onToggle(id);
    }
  };

  return (
    <div
      onClick={handleToggle}
      className={`relative border border-blue-200 p-4 pb-2 mb-2 w-full cursor-pointer rounded-lg flex flex-col ${
        completed ? "bg-green-200 line-through" : "bg-blue-50"
      }`}
    >
      {isEditing ? (
        <div className="flex flex-col space-y-2 pb-10">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            className="border p-2 rounded pb-2"
          />
        </div>
      ) : (
        <>
          <div className="mb-4">
            <h2 className="font-bold break-words">{title}</h2>
            <p className="break-words">{desc}</p>
            <button
              onClick={handleDelete}
              className="absolute top-2 right-1 px-2 rounded bg-none text-red-600"
            >
              X
            </button>
          </div>
        </>
      )}
      <button
        onClick={handleEdit}
        className="p-2 bg-none rounded-xl absolute bottom-1 right-0 text-blue-500"
      >
        {isEditing ? <FaCheck /> : <FaEdit />}
      </button>
    </div>
  );
};

export default Todo;
