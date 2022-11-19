import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo.reducer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;

export type State = ReturnType<typeof store.getState>;
