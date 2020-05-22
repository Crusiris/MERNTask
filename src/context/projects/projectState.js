////////////////////////////ARCHIVO////////////////////////////////
///////////////////PARA ESCRIBIR LAS FUNCIONES //////////////////////////////
//////////////////////QUE LLAMAN AL REDUCE/////////////////////
import React, { useReducer } from 'react';

import ProjectContext from './projectContext'; //importando context
import projectReducer from './projectReducer'; //importando reducer
import { FORM_PROJECT, GET_PROJECTS } from '../../types';//importando types



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
        form: false
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


  return(

      <ProjectContext.Provider
        value={{
            projects:state.projects, 
            form:state.form,
            showFormAddProject,
            getProject
        }}
      >
          {props.children}
      </ProjectContext.Provider>

  )

}

export default  ProjectState;
