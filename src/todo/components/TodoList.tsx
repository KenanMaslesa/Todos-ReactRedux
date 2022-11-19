import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../models";
import { State } from "../state/store";
import { getTodos } from "../state/todo.actions";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, isLoading } = useSelector((state: State) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <ul className={`todo__list ${isLoading ? "loading" : ""}`}>
        {todos.map(({ id, title, completed }: Todo) => (
          <TodoItem id={id} title={title} completed={completed} key={id} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
