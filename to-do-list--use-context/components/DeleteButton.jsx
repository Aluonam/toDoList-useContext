import React, {useContext} from 'react'
import { ToDoListContext } from '@/context/ContextApp'

const DeleteButton = ({task}) => {

    const {taskList, setTaskList} = useContext(ToDoListContext)

    const handleDeleteTask = ()=>{
        const newArrTaskList = taskList.filter((elementoActual)=>{return(elementoActual !== task)})
        setTaskList(newArrTaskList)

    }
   
  return (
    <button onClick={()=> handleDeleteTask()}> Borrar tarea</button>
  )
}

export default DeleteButton