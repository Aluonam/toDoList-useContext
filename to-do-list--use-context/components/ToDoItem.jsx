import React from 'react'

const ToDoItem = ({taskList}) => {

  console.log("tareas",taskList)

  const showTaskList = taskList.map((task)=>{
    return(
      <ul>
        <li>{task}</li>
      </ul>
    )
})


  return (
    <> {showTaskList}</>
   
  )
}

export default ToDoItem