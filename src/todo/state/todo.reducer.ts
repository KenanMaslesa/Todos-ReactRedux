import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models";

type TodoSlice = {
  todos: Todo[];
  isLoading: boolean;
};

const initialState: TodoSlice = {
  todos: [],
  isLoading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos(state, { payload }: PayloadAction<Todo[]>) {
      state.todos = payload;
    },

    addTodo(state, { payload }: PayloadAction<Todo>) {
      state.todos = [...state.todos, payload];
    },

    updateTodo(state, { payload }: PayloadAction<Todo>) {
      const todoList = [...state.todos];
      const todoIndex = todoList.findIndex((item) => item.id === payload.id);
      todoList[todoIndex] = payload;
      state.todos = todoList;
    },

    deleteTodo(state, { payload }: PayloadAction<number>) {
      const filteredArray = state.todos.filter((item) => item.id !== payload);
      state.todos = filteredArray;
    },

    clearCompletedTodos(state) {
      const uncompletedTodos = state.todos.filter((item) => !item.completed);
      state.todos = uncompletedTodos;
    },
    
    seIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
