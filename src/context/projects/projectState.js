/////////////////////////ARCHIVO////////////////////////////////
//////////////////////PARA MANEJAR//////////////////////////////
////////////////////////LOS STATE///////////////////////////////
import React, { useReducer } from 'react';

import ProjectContext from './projectContext'; //importando context
import projectReducer from './projectReducer'; //importando reducer

//Creando el provider
const ProjectState = props => {
    //Declarando un state inicial 
     const initialState = {
        form: false
      }

    //Dispath para ejecutar las acciones
     const [ state, dispatch ] = useReducer(projectReducer, initialState);

  //Funciones para el CRUD.

  return(

      <ProjectContext.Provider
        value={{ 
            form:state.form
        }}
      >
          {props.children}
      </ProjectContext.Provider>

  )

}

export default  ProjectState;
