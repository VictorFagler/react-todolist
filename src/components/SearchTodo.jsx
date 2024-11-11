// SearchTodo.js
import React from "react";

const SearchTodo = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search Todos"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="mb-4 p-2 border border-gray-300 text-center rounded-xl"
    />
  );
};

export default SearchTodo;
