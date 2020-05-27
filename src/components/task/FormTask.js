import React, {useContext} from 'react';
import projectContext  from '../../context/projects/projectContext';

const FormTask = () => {
    //Guardando el context en una constante
    const projectsContext = useContext(projectContext );

    //Extrayendo valores del context
    const {projselected} = projectsContext;

    //Condicion para cuando no hay ningun proyecto seleccionado
    if(!projselected) return null;

    //Destructuring del state projselected
    const [ projectCurrent ] = projselected;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre tarea..."
                    name="name"
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTask;