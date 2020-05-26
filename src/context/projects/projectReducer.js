//  DESDE AQUI SE VAN A CAMBIAR LOS STATE
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS } from '../../types';//importando types


export default (state, action)=>{
    switch (action.type) {
     case FORM_PROJECT:
         return{
            ...state, //Copia del state
            form:true //Mostrando el formulario de agregar proyecto
         }
         case GET_PROJECTS:
                return{
                   ...state, //Copia del state
                   projects:action.payload
                }
                case ADD_PROJECTS:
                  return{
                     ...state, //Copia del state
                     projects: [...state.projects, action.payload], //Agregando a esa copia DEL STATE el proyecto nuevo
                     form:false //Oculto el input de agregar formulario
                  }

     default:
        return state;
    }
}