import { useDispatch, useSelector } from "react-redux";
import { State } from "../state/store";
import { todoActions } from "../state/todo.reducer";

const TodoFilters = () => {
  const todos = useSelector((state: State) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="todo__filters">
      <span>{todos.filter(todo => !todo.completed).length} items left</span>

      {/* <ul>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul> */}
      
      <button onClick={() => {
        dispatch(todoActions.clearCompletedTodos())
      }}>Clear completed</button>
    </div>
  );
};

export default TodoFilters;
