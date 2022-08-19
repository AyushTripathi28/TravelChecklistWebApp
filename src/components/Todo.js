import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = ({ todos, removeTodo, }) => {
  //  ({ todos, completeTodo, removeTodo, updateTodo })
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: ''
  // });

  // const submitUpdate = value => {
  //   updateTodo(edit.id, value);
  //   setEdit({
  //     id: null,
  //     value: ''
  //   });
  // };

  // if (edit.id) {
  //   return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  // }
  // sort all those element first is element is most important
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


//  {/* <RiCloseCircleLine
//           onClick={() => removeTodo(todo.id)}
//           className='delete-icon'
//         /> */}


//         {/* <TiEdit
//           onClick={() => setEdit({ id: todo.id, value: todo.text })}
//           className='edit-icon'
//         /> */}