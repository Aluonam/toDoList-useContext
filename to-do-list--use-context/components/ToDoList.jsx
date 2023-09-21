import { ToDoListContext } from '@/context/ContextApp'
import React, { useContext, useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {

    //-------props que recibe del context
    const {taskList, setTaskList} = useContext(ToDoListContext)
    const [inputUserData, setInputUserData] = useState("")

    const handleAddTaskList = ()=>{
        // setTaskList([...taskList,inputUserData]) //otra forma que omite el structuredClone
        const newTaskList = structuredClone(taskList)
        newTaskList.push(inputUserData);
        setTaskList(newTaskList)
        setInputUserData("")
    }


  return (
    <>
    <input type='text' onChange={(e)=>{setInputUserData(e.target.value)}} value={inputUserData}></input>
    <button onClick={()=>{handleAddTaskList()}}>Añadir tarea</button>
    <ToDoItem taskList={taskList}></ToDoItem>
  
    </>
  )
}

export default ToDoList