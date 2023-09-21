import React, { createContext, useState } from 'react'

export const ToDoListContext = createContext();

export const ContextApp = ({children}) => {

//---------------variables/const/hooks-------------------------
    const [taskList, setTaskList] = useState([])
   



//---------------objeto valuesProvider (especifico qué se va a compartir)-------------------------

    const valuesProvider = {
        taskList,
        setTaskList,
    }


//---------------envoltura de children e indica los valores a los que tendrán acceso value={valuesProvider}-------------------------
  return (
    <>
    <ToDoListContext.Provider  value={valuesProvider}> 

        {children}
    </ToDoListContext.Provider>
    </>
  )
}

export default ContextApp