////////////////////////////ARCHIVO////////////////////////////////
///////////////////PARA ESCRIBIR LAS FUNCIONES //////////////////////////////
//////////////////////QUE LLAMAN AL REDUCE/////////////////////
import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ProjectContext from './projectContext'; //importando context
import projectReducer from './projectReducer'; //importando reducer
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS, ERROR_MESSAGE, PROJECT_CURRENT} from '../../types';//importando types



//Creando el provider
const ProjectState = props => {

    const projectss = [
        { id:1, name: 'Tienda Virtual'},
        { id:2, name: 'Intranet'},
        { id:3, name:'Diseño de sitio web'},
        { id:4, name:'MERN'}
    ]

    //Declarando un state inicial 
     const initialState = { 
        projects: [],
        form: false,
        errorform:false,
        projselected:null,
      }

    //Dispath para ejecutar las acciones
     const [ state, dispatch ] = useReducer(projectReducer, initialState);
     
     /////////////////////////////
    /////////FUNCIONES///////////
    const showFormAddProject = ()=>{
        dispatch({
            type: FORM_PROJECT
        })    
    }

    const getProject = () =>{
        dispatch({
            type: GET_PROJECTS,
            payload:projectss
        })    
    }

    //Funcion agregar proyecto
    const addProject = project =>{
        project.id = uuidv4();

        //Agregando el proyect en el state con la funcion DISPATCH
        dispatch({
            type:ADD_PROJECTS,
            payload: project
        })
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
            projectCurrent 
        }}
      >
          {props.children}
      </ProjectContext.Provider>

  )

}

export default  ProjectState;
