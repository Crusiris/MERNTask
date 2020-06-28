import React, { useReducer } from 'react';//importando useReduce
import TaskContext from './taskContext'; //importando task context
import taskReducer from './taskReducer'; //importando reducer
import clientAxios from '../../config/axios';
import { TASKS_PROJECT, ADD_TASK ,ERROR_TAREAFORM, DELETE_TASK, TASK_CURRENT, UPDATE_TASK, CLEAN_TASK,
     SHOW_FORM_TASK, HIDE_FORM_TASK } from '../../types'; //importando type

//Creando el provider

const TaskState = props =>{

     //Declarando un state inicial 
     const initialState = { 
        tasksProject:[],
        formTask:false,
        errortask:false,
        taskselect:null,  
      }
    
    //Dispath para ejecutar las acciones
    const [ state, dispatch ] = useReducer(taskReducer, initialState);

    //Funciones
    //Mostrar formulario de tareas
     const showFormTask = ()=>{
        dispatch({
            type:SHOW_FORM_TASK
        });
     }
     //Ocultar formulario de tareas
     const hideFormTask = ()=>{
        dispatch({
            type:HIDE_FORM_TASK
        });
     }
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

    //Modificar tarea
    const updateTask = async task =>{

       try { 
        
        const res = await clientAxios.put(`/api/tareas/${task._id}`, task );
       
        dispatch({
            type: UPDATE_TASK,
            payload: res.data.task
        })
       } catch (error) {
           console.log(error)
       }
    }

    //Seleccionando tarea
    const selecTaskCurrent = task =>{
        dispatch({
            type:TASK_CURRENT,
            payload:task
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
            formTask:state.formTask,
            getTasks,
            addTask,
            showFormTask,
            hideFormTask,
            validateFormTask,
            deleteTask,
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