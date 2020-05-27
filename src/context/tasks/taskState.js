import React, { useReducer } from 'react';//importando useReduce
import TaskContext from './taskContext'; //importando task context
import taskReducer from './taskReducer'; //importando reducer

//Creando el provider

const TaskState = props =>{

     //Declarando un state inicial 
     const initialState = { 
        tasks: [],
      }

    //Dispath para ejecutar las acciones
    const [ state, dispatch ] = useReducer(TaskState, initialState);



    return(

        <TaskContext.Provider
          value={{
            tasks:state.tasks
          }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default  TaskState;