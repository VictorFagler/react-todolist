import React from "react";

const SortDropdown = ({ sortOption, setSortOption }) => {
  return (
    <div className="mb-4 text-gray-800">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="p-2 rounded-xl border border-gray-300 text-center"
      >
        <option value="date">Sort by Date</option>
        <option value="alphabetic">Sort Alphabetically</option>
        <option value="priority">Sort by Priority</option>
      </select>
    </div>
  );
};

export default SortDropdown;
