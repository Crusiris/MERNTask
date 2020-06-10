import React,{ useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({project}) => {

     //obteniendo el  context con useContext
     const projectsContext = useContext(projectContext);
     const { projectCurrent } = projectsContext;

     //Destructurin del context para obtener el state de projecSelecte 
     const tasksContext = useContext(taskContext);
     const { getTasks } = tasksContext;

    //Funcion para agregar el proyecto actual
    const selectedProject = id => {
        projectCurrent(id);//seleccionando proyecto
       getTasks(id); //filtrando tareas segun el proyecto seleccionado
    }

    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick= {()=> selectedProject(project._id)}
            >{project.name}</button>
        </li>
     );
}
 
export default Project;