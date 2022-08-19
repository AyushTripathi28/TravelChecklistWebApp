import React from 'react';


const Todo = ({ todos, removeTodo, }) => {

  todos = todos.sort((a, b) => {
    if (a.isImportant && !b.isImportant) {
      return -1;
    } else if (!a.isImportant && b.isImportant) {
      return 1;
    } else {
      return 0;
    }
  });

  return todos.map((todo, index) => (
    <div className={!todo.isImportant ? 'todo-row' : 'todo-priority-list'} key={index} style={{}}>
      <div key={todo.id} className='todo-row-item-text'>
        <div className='todo-row-item-title-text'> {todo.text}</div>
        <div> Travel Time: {todo.time} </div>
        <div>Travel Date: {todo.date}</div>
      </div >
      <div className='icons'>
        <input type="checkbox" onChange={() => removeTodo(todo.id)} checked={false} />
      </div>
    </div>
  ));
};

export default Todo;
