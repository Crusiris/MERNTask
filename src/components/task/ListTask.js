import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const ListTask = () => {

    //Obteniendo context en el componente
    const projecstContext = useContext(projectContext);

    //Destructuring del context [Extrayendo los state y funciones que necesitaremos]
    const {projselected} = projecstContext;

    //Condicion para cuando no hay ningun proyecto seleccionado
    if(!projselected) return <h2>Selecciona un proyecto</h2>

    //Destructuring del state projselected
    const [ projectCurrent ] = projselected;

    const tasksProject = [
        { name:'Elegir plataforma', state:false },
        { name:'Elegir Colores', state:true },
        { name:'Elegir plataformas de pago', state:false },
        { name:'Elegir Hosting', state:true }
    ]

    return ( 
        <Fragment>  
            <h2>Proyecto: {projectCurrent.name}</h2>

            <ul className="listado-tareas">

                   {tasksProject.length === 0

                        ?   (<li className="tarea"> <p> No hay tareas </p></li>)
                    
                        :   tasksProject.map(task =>(
                                <Task
                                task={task}
                                />
                            ))

                    }
                   
            </ul>
            <button
            type="button"
            className="btn btn-eliminar"
            >Eliminar proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListTask;