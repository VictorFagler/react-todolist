import { useState, useEffect, useMemo } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos
        ? JSON.parse(savedTodos)
        : [
            {
              id: 1,
              title: "Learn React",
              desc: "Learn it",
              completed: false,
              priority: 1,
              createdAt: new Date().toISOString(),
            },
            {
              id: 2,
              title: "Build a Todo App",
              desc: "Build it",
              completed: true,
              priority: 3,
              createdAt: new Date().toISOString(),
            },
            {
              id: 3,
              title: "Master React Hooks",
              desc: "Master it",
              completed: false,
              priority: 3,
              createdAt: new Date().toISOString(),
            },
          ];
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
      return [];
    }
  });

  const [sortOption, setSortOption] = useState("date");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Filter and sort todos
  const filteredTodos = useMemo(() => {
    // Step 1: Filter todos based on search query
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Step 2: Sort the filtered todos based on the selected sort option
    return filtered.sort((a, b) => {
      switch (sortOption) {
        case "alphabetic":
          return a.title.localeCompare(b.title);
        case "priority":
          return b.priority - a.priority; // Assuming higher priority = higher number
        case "date":
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
  }, [todos, searchQuery, sortOption]);

  // Todo Actions
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => {
      const newId =
        prevTodos.length > 0
          ? Math.max(...prevTodos.map((todo) => todo.id)) + 1
          : 1;
      return [
        ...prevTodos,
        {
          id: newId,
          ...newTodo,
          priority: 3,
          createdAt: new Date().toISOString(),
        },
      ];
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTitle, newDesc) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle, desc: newDesc } : todo
      )
    );
  };

  return {
    todos,
    filteredTodos, // Already filtered and sorted todos
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
  };
};

export default useTodos;
