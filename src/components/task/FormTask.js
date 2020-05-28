import React, {useContext, useState} from 'react';
import projectContext  from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {
    //Guardando el context en una constante
    const projectsContext = useContext(projectContext );

    //Extrayendo valores del context
    const {projselected} = projectsContext;

     //Destructurin del context para obtener el state de projecSelecte 
     const tasksContext = useContext(taskContext);
     const { addTask } = tasksContext;

    //State del formulario
    const [ task, saveTask ] = useState({
        name:'',
    })

    //extraer el nombre de tarea
    const { name } = task

    //Condicion para cuando no hay ningun proyecto seleccionado
    if(!projselected) return null;

    //Destructuring del state projselected
    const [ projectCurrent ] = projselected;

    //Leer los valores del formulario
    const handleChange = e =>{
        saveTask({
            ...task,
            [e.target.name]:e.target.value
        }) 
    }

    const onSubmitTask = e =>{
        e.preventDefault();

        //validar
        //pasar la validacion
        //agregar la nueva tarea
        task.projectId = projectCurrent.id;
        task.state=false;
        addTask(task);
        //reiniciar el form
    
    }

    return ( 
        <div className="formulario">
            <form
              onSubmit={onSubmitTask}
            >
                <div className="contenedor-input">
                    <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre tarea..."
                    name="name"
                    value={name}
                    onChange={handleChange}
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