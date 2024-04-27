import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello", editTodo: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload, editTodo: false };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, text: action.payload.text };
        }
        return item;
      });
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          return { ...item, editTodo: !item.editTodo };
        }
        return item;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
