import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../state/todo.actions";

const TodoAdd = () => {
  const [enteredText, setEnteredText] = useState("");
  const dispatch = useDispatch();

  const addTodoItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(
        addTodo({ id: Date.now(), title: enteredText, completed: false })
      );
      setEnteredText("");
    }
  };

  return (
    <>
      <input
        className="todo__new"
        type="text"
        value={enteredText}
        placeholder="What needs to be done?"
        onKeyDown={addTodoItem}
        onChange={(e) => setEnteredText(e.target.value)}
      />
    </>
  );
};

export default TodoAdd;
