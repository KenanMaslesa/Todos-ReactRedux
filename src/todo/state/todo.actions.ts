import { Dispatch } from "react";
import { todoActions } from "./todo.slice";
import { DispatchType, Todo } from "../models";

import axios from "axios";

const apiUrl = "https://mockend.com/KenanMaslesa/todos-api/todo";

export const getTodos = (): any => {
  return async (dispatch: Dispatch<DispatchType<Todo[] | boolean>>) => {
    dispatch(todoActions.seIsLoading(true));
    try {
      const response = await axios.get(`${apiUrl}?limit=10&id_order=asc`);
      dispatch(todoActions.setTodos(response.data as Todo[]));
      dispatch(todoActions.seIsLoading(false));
    } catch (error) {
      alert(error);
    }
  };
};

export const addTodo = (todo: Todo): any => {
  return async (dispatch: Dispatch<DispatchType<Todo | boolean>>) => {
    dispatch(todoActions.seIsLoading(true));
    try {
      const response = await axios.post(`${apiUrl}`, todo);
      dispatch(todoActions.addTodo(response.data as Todo));
      dispatch(todoActions.seIsLoading(false));
    } catch (error) {
      alert(error);
    }
  };
};

export const updateTodo = (todo: Todo, id: number): any => {
  return async (dispatch: Dispatch<DispatchType<Todo | boolean>>) => {
    dispatch(todoActions.seIsLoading(true));
    try {
      const response = await axios.put(`${apiUrl}/${id}`, todo);
      dispatch(todoActions.updateTodo(response.data as Todo));
      dispatch(todoActions.seIsLoading(false));
    } catch (error) {
      alert(error);
    }
  };
};

export const deleteTodo = (id: number): any => {
  return async (dispatch: Dispatch<DispatchType<number | boolean>>) => {
    dispatch(todoActions.seIsLoading(true));
    try {
      axios.delete(`${apiUrl}/${id}`).then(() => {
        dispatch(todoActions.deleteTodo(id));
        dispatch(todoActions.seIsLoading(false));
      });
    } catch (error) {
      alert(error);
    }
  };
};
