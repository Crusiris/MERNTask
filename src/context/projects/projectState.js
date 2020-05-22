/////////////////////////ARCHIVO////////////////////////////////
//////////////////////PARA MANEJAR//////////////////////////////
////////////////////////LOS STATE///////////////////////////////
import React, { useReducer } from 'react';

import projectContext from './projectContext'; //importando context
import projectReducer from './projectReducer'; //importando reducer

//Declarando un state inicial 
const ProjectState = props => {

    const initialState = {
        form: false
    }

     //Dispath para ejecutar las acciones
  const [ state, dispatch ] = useReducer(projectReducer, initialState);

  //Funciones para el CRUD.

  return(

      <projectContext.Provider
        value={{ 
            form:state.form
        }}
      >
          {props.children}
      </projectContext.Provider>

  )

}

export default  ProjectState;
