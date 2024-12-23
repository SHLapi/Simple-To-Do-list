import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TodoWrapper } from './TodoWrapper'
import React from 'react'

export const Todo = ({task, completed}) => {
  return (
    <div className="Todo">
      <p onClick={() => completed(task.id)} 
        className={`${task.completed? "completed" : "notCompleted" }`} 
        >
          {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}/>
        <FontAwesomeIcon icon={faTrash}/>
      </div>
    </div>
  )
}
