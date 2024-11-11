// App.js
import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import useTodos from "./hooks/useTodos";
import SearchTodo from "./components/SearchTodo";
import SortDropdown from "./components/SortDropdown";

function App() {
  const {
    filteredTodos,
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
  } = useTodos();

  return (
    <div className="p-12 bg-gray-100 min-h-screen">
      <h1 className="text-center font-extrabold text-3xl my-6">Todo List</h1>
      <div className="flex flex-col justify-center items-center">
        <AddTodo onAdd={addTodo} />
        <div className="flex space-x-6">
          <SearchTodo
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        </div>
        <TodoList
          todos={filteredTodos} // Pass filteredTodos here
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
