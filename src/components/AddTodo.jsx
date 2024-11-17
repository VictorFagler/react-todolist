import React, { useState, useRef } from "react";

const AddTodo = ({ onAdd }) => {
  const [isFormVisible, setIsFormVisible] = useState(false); // Toggle form visibility
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
      setIsFormVisible(false); // Hide form after submitting
    }
  };

  return (
    <div className="text-center space-y-6 mb-6  p-4 rounded-xl max-w-[80%] w-full ${}">
      <button
        onClick={() => setIsFormVisible(!isFormVisible)} // Toggle form visibility
        className="p-2 bg-blue-500 text-white rounded-xl"
      >
        {isFormVisible ? "Cancel" : "Add New Todo"}
      </button>

      {isFormVisible && ( // Conditionally render the form
        <form className="flex flex-col mt-4 space-y-4 " onSubmit={handleSubmit}>
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
          
          <button
            type="submit"
            className="p-2 bg-blue-300 rounded-xl w-24 my-2"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default AddTodo;
