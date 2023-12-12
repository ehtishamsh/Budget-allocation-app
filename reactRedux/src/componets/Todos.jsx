import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function Todos() {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      {todo.map((item) => {
        return (
          <div
            className="bg-white p-4 rounded-md shadow-md max-w-md"
            key={item.id}
          >
            <div className="flex items-center justify-between">
              <input
                type="text"
                value={item.text}
                onChange={(e) =>
                  dispatch(updateTodo({ id: item.id, text: e.target.value }))
                }
                class="text-lg font-semibold text-gray-800 bg-transparent border-none focus:outline-none disabled:bg-slate-500"
                disabled={item.editTodo}
              />
              <button
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
                onClick={() => dispatch(editTodo(item.id))}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => dispatch(removeTodo(item.id))}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Todos;
