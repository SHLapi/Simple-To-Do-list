import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = ({task, completed, Delete, Edit}) => {
  return (
    <div className="Todo">
      <p onClick={() => completed(task.id)} 
        className={`${task.completed? "completed" : "notCompleted" }`} 
        >
          {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' onClick={()=> Edit(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={()=>Delete(task.id)} className='delete-icon'/>
      </div>
    </div>
  )
}
