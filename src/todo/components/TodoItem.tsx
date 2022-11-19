import { useDispatch } from "react-redux";
import { Todo } from "../models";
import { deleteTodo, updateTodo } from "../state/todo.actions";

const TodoItem = ({ id, title, completed }: Todo) => {
  const dispatch = useDispatch();

  const updateTodoItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTodo({ id, title, completed: event.target.checked }, id));
  };

  return (
    <>
      <li className="todo__item">
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={updateTodoItem}
        />
        <label>{title}</label>
        <button
          onClick={() => {
            dispatch(deleteTodo(id));
          }}
        >
          x
        </button>
      </li>
    </>
  );
};

export default TodoItem;
