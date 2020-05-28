import React, {useContext, useState, useEffect} from 'react';
import projectContext  from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {
    //Guardando el context en una constante
    const projectsContext = useContext(projectContext );

    //Extrayendo valores del context
    const {projselected} = projectsContext;

     //Destructurin del context para obtener el state de projecSelecte 
     const tasksContext = useContext(taskContext);
     const { taskselect, addTask, errortask,  validateFormTask, getTasks, updateTask, cleanTask } = tasksContext;

     useEffect(()=>{
         if(taskselect !== null){
            saveTask(taskselect)

         }else{
            saveTask({
                name:''
            })
         }
     },[taskselect])

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
        if(name.trim() === ''){
            validateFormTask();
            return
        }

        //Validando que no este ninguna tarea seleccionada para editar
        if (taskselect === null){

          //agregar la nueva tarea
            task.projectId = projectCurrent.id;
            task.state=false;
            addTask(task);

        }else{
            updateTask(task)

            //Eliminamos la tarea seleccionada
            cleanTask();
        }

        //Obtener y filtrar las tareas del proyecto actual
        getTasks(projectCurrent.id);
        //reiniciar el form
        saveTask({
            name:''
        })
    
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
                    value={taskselect ? 'Editar Tarea ': 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errortask ? <p className="mensaje error"> El nombre de la tarea es obligatorio </p>:null}
        </div>
     );
}
 
export default FormTask;