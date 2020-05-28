import React, { useReducer } from 'react';//importando useReduce
import TaskContext from './taskContext'; //importando task context
import taskReducer from './taskReducer'; //importando reducer
import { TASKS_PROJECT, ADD_TASK ,ERROR_TAREAFORM} from '../../types'; //importando type

//Creando el provider

const TaskState = props =>{

     //Declarando un state inicial 
     const initialState = { 
        tasks: [
        { name:'Elegir plataforma', state:false, projectId:1 },
        { name:'Elegir Colores', state:true, projectId:2 },
        { name:'Elegir plataformas de pago', state:false, projectId:3 },
        { name:'Elegir Hosting', state:true, projectId:2 },
        { name:'Elegir plataforma', state:false, projectId:1 },
        { name:'Elegir Colores', state:true, projectId:2 },
        { name:'Elegir plataformas de pago', state:false, projectId:3 },
        { name:'Elegir Hosting', state:true, projectId:4 },
        { name:'Elegir plataforma', state:false, projectId:2 },
        { name:'Elegir Colores', state:true, projectId:2 },
        { name:'Elegir plataformas de pago', state:false, projectId:3 },
        { name:'Elegir Hosting', state:true, projectId:3 }
        ],
        tasksProject:null,
        errortask:false
      }

    //Dispath para ejecutar las acciones
    const [ state, dispatch ] = useReducer(taskReducer, initialState);

    //Funciones

    //Obtener las tareas de un proyecto
    const getTasks = projectId => {
        dispatch({
            type:TASKS_PROJECT,
            payload:projectId
        })
    }

    //Agregando tarea
    const addTask = task =>{
        dispatch({
            type:ADD_TASK,
            payload:task
        })
    }

    //Validar formulario tareas
    const validateFormTask = () =>{
        dispatch({
            type:ERROR_TAREAFORM
        })
    }



    return(

        <TaskContext.Provider
          value={{
            tasks:state.tasks,
            tasksProject:state.tasksProject,
            errortask:state.errortask,
            getTasks,
            addTask,
            validateFormTask
          }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default  TaskState;