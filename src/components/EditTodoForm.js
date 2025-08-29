'use client'
import { useState } from 'react';


export const EditTodoForm = ({task, editTodo}) => {
  const [value, setValue] = useState(task.task)

  const submitHandler = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("")
  }

  return (
    <form className="TodoForm" onSubmit={submitHandler} > 
      <input type="text" 
        value={value}
        className="todo-input" 
        placeholder={task.task}
        onChange={(e)=> setValue(e.target.value)} />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>

  )
}
