//  DESDE AQUI SE VAN A CAMBIAR LOS STATE
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS, ERROR_MESSAGE, PROJECT_CURRENT } from '../../types';//importando types


export default (state, action)=>{
    switch (action.type) {
     case FORM_PROJECT:
         return {
            ...state, //Copia del state
            form:true //Mostrando el formulario de agregar proyecto
         }
     case GET_PROJECTS:
          return {
            ...state, //Copia del state
            projects:action.payload
         }
     case ADD_PROJECTS:
         return {
          ...state, //Copia del state
          projects: [...state.projects, action.payload], //Agregando a esa copia DEL STATE el proyecto nuevo
          form:false, //Oculto el input de agregar formulario
          errorform:false //No hay error asi que se cambia el estado que maneja el error a false
         }
     case ERROR_MESSAGE:
         return {
         ...state, //Copia del state
         errorform:true //Hay un error [El campo esta vacio] asi que el state se cambia a true
         }
      case PROJECT_CURRENT:
         return{
         ...state, //Copia del state
         projselected:state.projects.filter(project => project.id === action.payload) //asignando el proyecto sleccionado          
         }
                     

     default:
        return state;
    }
}