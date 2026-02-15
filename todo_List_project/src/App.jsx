import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // Load todos once
  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  // Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
      },
    ]);

    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div>
        <h1 className="text-5xl text-center text-white">Todo List</h1>

        <form onSubmit={handleSubmit} className="mt-10 flex gap-5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-white text-xl p-2 rounded-lg"
            placeholder="Add a todo"
          />

          <button
            type="submit"
            className="bg-yellow-300 text-xl w-fit px-4 py-2 rounded-lg"
          >
            Add Todo
          </button>
        </form>

        <div className="mt-10 mx-10">
          <ul className="list-disc space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="text-white text-xl font-bold flex justify-between items-center gap-4"
              >
                <span>{todo.text}</span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
