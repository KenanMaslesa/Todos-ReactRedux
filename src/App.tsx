import React, { useEffect } from "react";
import TodoAdd from "./todo/components/TodoAdd";
import TodoFilters from "./todo/components/TodoFilters";
import TodoList from "./todo/components/TodoList";

const App = () => {
  useEffect(() => {
    document.title = "React Todos Redux";
  }, []);

  return (
    <>
      <h1 className="title">Todos Redux</h1>
      <section className="todo-section">
        <TodoAdd />
        <TodoList />
        <TodoFilters />
      </section>
    </>
  );
};

export default App;
