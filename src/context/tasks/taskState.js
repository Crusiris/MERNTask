import React, { useReducer } from 'react';//importando useReduce
import TaskContext from './taskContext'; //importando task context
import taskReducer from './taskReducer'; //importando reducer
import clientAxios from '../../config/axios';
import { TASKS_PROJECT, ADD_TASK ,ERROR_TAREAFORM, DELETE_TASK, STATE_TASK, TASK_CURRENT, UPDATE_TASK, CLEAN_TASK } from '../../types'; //importando type

//Creando el provider

const TaskState = props =>{

     //Declarando un state inicial 
     const initialState = { 
        tasksProject:[],
        errortask:false,
        taskselect:null
        
      }
    
    //Dispath para ejecutar las acciones
    const [ state, dispatch ] = useReducer(taskReducer, initialState);

    //Funciones

    //Obtener las tareas de un proyecto
    const getTasks = async projectcreate => {
        try {
            const res = await clientAxios.get('/api/tareas', {params:{projectcreate} });
            
            dispatch({
                type:TASKS_PROJECT,
                payload:res.data.tasks
            })
        } catch (error) {
         console.log(error)   
        }
    }

    //Agregando tarea
    const addTask = async task =>{
        
        try {
            const res = await clientAxios.post('/api/tareas', task);
            dispatch({
                type:ADD_TASK,
                payload:res.data
            });
        } catch (error) {
            console.log(error);
        }
       
    }

    //Validar formulario tareas
    const validateFormTask = () =>{
        dispatch({
            type:ERROR_TAREAFORM
        })
    }

    //Eliminar tarea por id
    const deleteTask = async (id, projectcreate) =>{

        try {
            const res = await clientAxios.delete(`/api/tareas/${id}`, {params:{projectcreate} });
            console.log(res)
            dispatch({
                type:DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    //Cambiando el state de una tarea
    const changeStateTask = task => {
        dispatch({
            type:STATE_TASK,
            payload:task
        })
    }

    //Seleccionando tarea
    const selecTaskCurrent = task =>{
        dispatch({
            type:TASK_CURRENT,
            payload:task
        })
    }

    //Modificar tarea
    const updateTask = task =>{
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    //Limpiando tarea selecionada
    const cleanTask = ()=>{
        dispatch({
            type:CLEAN_TASK
        })
    }


    return(

        <TaskContext.Provider
          value={{
            tasksProject:state.tasksProject,
            errortask:state.errortask,
            taskselect:state.taskselect,
            getTasks,
            addTask,
            validateFormTask,
            deleteTask,
            changeStateTask,
            selecTaskCurrent,
            updateTask,
            cleanTask
          }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default  TaskState;