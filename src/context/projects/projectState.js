////////////////////////////ARCHIVO////////////////////////////////
///////////////////PARA ESCRIBIR LAS FUNCIONES //////////////////////////////
//////////////////////QUE LLAMAN AL REDUCE/////////////////////
import React, { useReducer } from 'react';

import ProjectContext from './projectContext'; //importando context
import projectReducer from './projectReducer'; //importando reducer
import { FORM_PROJECT } from '../../types';//importando types

//Creando el provider
const ProjectState = props => {
    //Declarando un state inicial 
     const initialState = {
        form: false
      }

    //Dispath para ejecutar las acciones
     const [ state, dispatch ] = useReducer(projectReducer, initialState);

    //FUNCIONES.
    const showFormAddProject = ()=>{
        dispatch({
            type: FORM_PROJECT
        })    
    }

  return(

      <ProjectContext.Provider
        value={{ 
            form:state.form,
            showFormAddProject
        }}
      >
          {props.children}
      </ProjectContext.Provider>

  )

}

export default  ProjectState;
