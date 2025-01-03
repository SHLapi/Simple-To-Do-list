'use client'
import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo'
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm';
uuidv4();


export const TodoWrapper = () => 
  {
  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
    setTodos ([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]) 
  }
  const taskCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo))
  }
  const deleteTodo = (id)=>{
    setTodos(todos.filter( todo => todo.id !==id ))
  }
  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="TodoWrapper">
      <h1>Your To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ?
        (<EditTodoForm key={index} task={todo} editTodo={editTask}/>)
        :
        (<Todo task={todo} key={index} 
          completed={taskCompleted} 
          Delete={deleteTodo} 
          Edit={editTodo}/>) 
        ))}
    </div>
  )
}
