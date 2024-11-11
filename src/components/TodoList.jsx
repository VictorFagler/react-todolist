// components/TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const completedTodos = todos.filter((todo) => todo.completed);
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="flex justify-between w-full max-w-[80%] border border-gray-300 rounded-xl">
      <div className="w-1/2 p-4 bg-gray-200 rounded-xl rounded-r-none border-r border-gray-300">
        <h2 className="font-bold py-2 mb-2 text-center">Todos</h2>
        {incompleteTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            desc={todo.desc}
            completed={todo.completed}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>

      <div className="w-1/2 p-4 bg-gray-200 rounded-xl rounded-l-none">
        <h2 className="font-bold py-2 mb-2 text-center">Completed Todos</h2>
        {completedTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            desc={todo.desc}
            completed={todo.completed}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
