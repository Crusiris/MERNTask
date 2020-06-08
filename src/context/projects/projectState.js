////////////////////////////ARCHIVO////////////////////////////////
///////////////////PARA ESCRIBIR LAS FUNCIONES //////////////////////////////
//////////////////////QUE LLAMAN AL REDUCE/////////////////////
import React, { useReducer } from 'react';
import ProjectContext from './projectContext'; //importando context
import projectReducer from './projectReducer'; //importando reducer
import clientAxios from '../../config/axios'; //Importando cliente axios
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS, ERROR_MESSAGE, PROJECT_CURRENT, DELETE_PROJECT} from '../../types';//importando types



//Creando el provider
const ProjectState = props => {

    //Declarando un state inicial 
     const initialState = { 
        projects: [],
        form: false,
        errorform:false,
        projselected:null
        
      }

    //Dispath para ejecutar las acciones
     const [ state, dispatch ] = useReducer(projectReducer, initialState);
     
     /////////////////////////////
    /////////FUNCIONES///////////
    //Mostrando formulario para agregar proyecto
    const showFormAddProject = ()=>{
        dispatch({
            type: FORM_PROJECT
        })    
    }
    //Obtener proyecto
    const getProject = async () =>{
           
        try {
            //Peticion a la base de batos
            const res = await clientAxios.get('/api/proyectos');
            
            dispatch({
                type: GET_PROJECTS,
                payload:res.data.project
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Funcion agregar proyecto
    const addProject = async project =>{
       
        try {
            //haciendo la peticion
            const res = await clientAxios.post('/api/proyectos', project);

             //Agregando el proyect en el state con la funcion DISPATCH
            dispatch({
                type:ADD_PROJECTS,
                payload:res.data
            })
        } catch (error) {
            console.log(error)
        }

       
    }

    //Funcion para mostrar mensaje 
    const showErrorMsj = ()=>{
        dispatch({
            type:ERROR_MESSAGE
        })

    }

    //Funcion que selecciona el proyecto clickeado
    const projectCurrent = projid => {
         dispatch({
             type:PROJECT_CURRENT,
             payload: projid
         })
    }

    //Funcion que elimina un proyecto
    const deleteproject = async projid => {

    try {
       await clientAxios.delete(`/api/proyectos/${projid}`);
       
        dispatch({
            type:DELETE_PROJECT,
            payload:projid
        })
    } catch (error) {
        console.log(error.response);
    }

        
    }


  return(

      <ProjectContext.Provider
        value={{
            projects:state.projects, 
            form:state.form,
            errorform:state.errorform,
            projselected: state.projselected,
            showFormAddProject,
            getProject,
            addProject,
            showErrorMsj,
            projectCurrent,
            deleteproject
        }}
      >
          {props.children}
      </ProjectContext.Provider>

  )

}

export default  ProjectState;
