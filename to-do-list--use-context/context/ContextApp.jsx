import React, { createContext } from 'react'

export const ToDoListContext = createContext();

export const ContextApp = (props) => {

//---------------variables/const/hooks-------------------------
    const [taskList, setTaskList] = useState([])



//---------------objeto valuesProvider (especifico qué se va a compartir)-------------------------



//---------------envoltura de children e indica los valores a los que tendrán acceso value={valuesProvider}-------------------------
  return (
    <>
    <ToDoListContext.Provider  > 


    </ToDoListContext.Provider>
    </>
  )
}

export default ContextApp