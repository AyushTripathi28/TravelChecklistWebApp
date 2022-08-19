import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = {
      id: todo.id,
      text: todo.text,
      date: todo.date,
      time: todo.time,
      isImportant: todo.isImportant,
    }
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  return (
    <>
      <h1>Travel Checklist App</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default TodoList;


