import React, { createContext } from 'react'

export const ToDoListContext = createContext();

export const ContextApp = (props) => {



  return (
    <>
    <ToDoListContext.Provider>

        
    </ToDoListContext.Provider>
    </>
  )
}

export default ContextApp