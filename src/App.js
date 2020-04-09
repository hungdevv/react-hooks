import React, { useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// import ColorBox from "./components/ColorBox";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "List1",
    },
    {
      id: 2,
      title: "List2",
    },
    {
      id: 3,
      title: "List3",
    },
    {
      id: 4,
      title: "List4",
    },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValue) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />{" "}
    </div>
  );
}

export default App;
