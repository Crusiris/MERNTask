import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const ListTask = () => {

    //Obteniendo context en el componente
    const projecstContext = useContext(projectContext);

    //Destructuring del context [Extrayendo los state y funciones que necesitaremos]
    const { projselected, deleteproject } = projecstContext;

    //Destructurin del context para obtener el state de projecSelecte 
    const tasksContext = useContext(taskContext);
    const { getTasks, tasksProject } = tasksContext;

    //Condicion para cuando no hay ningun proyecto seleccionado
    if(!projselected) return <h2>Selecciona un proyecto</h2>

    //Destructuring del state projselected
    const [ projectCurrent ] = projselected;

    const onClickProjectDelete = () => {
        deleteproject(projectCurrent.id)
    }

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
            onClick={onClickProjectDelete}
            >Eliminar proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListTask;