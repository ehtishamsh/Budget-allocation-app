import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function Addtodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <form
      id="task-form"
      onSubmit={addTodoHandler}
      className="flex justify-center mb-4"
    >
      <input
        type="text"
        id="task-input"
        className="w-full p-2 rounded-lg shadow-lg border border-gray-300"
        placeholder="Enter a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 rounded-full bg-blue-500 text-white ml-2"
      >
        Add
      </button>
    </form>
  );
}

export default Addtodo;
