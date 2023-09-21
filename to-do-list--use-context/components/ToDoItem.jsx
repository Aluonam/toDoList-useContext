import React from 'react'
import DeleteButton from './DeleteButton'

const ToDoItem = ({taskList}) => {


  const showTaskList = taskList.map((task)=>{
    return(
      <ul>
        <li>{task}
        <DeleteButton task={task}></DeleteButton>
        </li>
      </ul>
    )
})

  return (
    <> {showTaskList}</>
   
  )
}

export default ToDoItem