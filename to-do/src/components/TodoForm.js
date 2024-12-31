'use client'
import { useState } from 'react';


export const TodoForm = ({addTodo}) => {
  const [task, setTask] = useState("")

  const submitHandler = (e) => {
    task.length === 0 ? 
    (alert("Please Enter a Task!"), e.preventDefault())
    :
    (e.preventDefault(),
    addTodo(task),
    setTask(""))
  }


  return (
    <form onSubmit={submitHandler} > 
      <input type="text" 
        value={task}
        className="todo-input" 
        placeholder="New Task?"
        onChange={(e)=> setTask(e.target.value)} />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>

  )
}
