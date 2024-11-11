import React, { useState, useRef } from "react";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [completed, setCompleted] = useState(false);
  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && desc) {
      onAdd({ title, desc, completed });
      setTitle("");
      setDesc("");
      setCompleted(false);
      titleRef.current.focus();
    }
  };

  return (
    <div className="text-center space-y-6 mb-6 bg-gray-200 p-4 rounded-xl max-w-[80%] w-full">
      <div>Add New Todo</div>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          ref={titleRef}
          className="border p-2 rounded"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div>
          <button
            type="submit"
            className="p-2 bg-blue-300 rounded-xl w-24 my-2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
