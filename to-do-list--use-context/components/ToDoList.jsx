import { ToDoListContext } from '@/context/ContextApp'
import React, { useContext, useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {

    //-------props que recibe del context
    const {taskList, setTaskList} = useContext(ToDoListContext)
    const [inputUserData, setInputUserData] = useState("")

    const handleAddTaskList = ()=>{
        const newTaskList = structuredClone(taskList)
        newTaskList.push(inputUserData);
        setTaskList(newTaskList)
        setInputUserData("")
        console.log(newTaskList)
    }

    const showTaskList = taskList.map((task)=>{
        return(
            <ToDoItem task={task}></ToDoItem>
        )
    })


  return (
    <>
    <input type='text' onChange={(e)=>{setInputUserData(e.target.value)}} value={inputUserData}></input>
    <button onClick={()=>{handleAddTaskList()}}>Añadir tarea</button>
    {showTaskList}
    </>
  )
}

export default ToDoList