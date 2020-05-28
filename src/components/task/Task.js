import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {
//Obteniendo context en el componente
  const projecstContext = useContext(projectContext);
//Destructuring del context [Extrayendo los state y funciones que necesitaremos]
  const { projselected } = projecstContext;


////Obteniendo context en el componente
const tasksContext = useContext(taskContext);
//Destructuring del context [Extrayendo los state y funciones que necesitaremos]
const { deleteTask, getTasks, changeStateTask, selecTaskCurrent} = tasksContext;


//Destructuring del state projselected
const [ projectCurrent ] = projselected;

//Funcion eliminar tarea
const onClickDelete = id =>{
    deleteTask(id);
    getTasks(projectCurrent.id);
}

//Cambiar estado de tarea
const changeState = task =>{
    if(task.state){
        task.state = false;
    }else{
        task.state = true;
    }

    changeStateTask(task);
}

//Obteniendo tarea a editar
const selectTask = task => {
    selecTaskCurrent(task)
}



    return ( 
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                    {task.state
                    ?
                        (
                            <button
                            type="button"
                            className="completo"
                            onClick={()=> changeState(task)}
                            >Completo</button>
                        )
                    :
                        
                        (
                            <button
                            type="button"
                            className="incompleto"
                            onClick={()=> changeState(task)}
                            >Incompleto</button>
                        )

                    }
            </div>
            <div className="acciones">
                <button
                type="button"
                className="btn btn-primario"
                onClick={()=> selectTask(task)}
                >Editar</button>

                <button
                type="button"
                className="btn btn-secundario"
                onClick={ () => onClickDelete(task.id) }
                >Eliminar</button>
            </div>

        </li>
    );
}
 
export default Task;