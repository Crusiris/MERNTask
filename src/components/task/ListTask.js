import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = () => {

    const tasksProject = [
        { name:'Elegir plataforma', state:false },
        { name:'Elegir Colores', state:true },
        { name:'Elegir plataformas de pago', state:false },
        { name:'Elegir Hosting', state:true }
    ]

    return ( 
        <Fragment>  
            <h2>Proyecto: Tienda virtual</h2>

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