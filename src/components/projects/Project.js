import React,{ useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
//Material UI imports
import { ListItem, ListItemIcon, ListItemText, Grow } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';

const Project = ({ project, handleDrawerToggle }) => {

     //obteniendo el  context con useContext
     const projectsContext = useContext(projectContext);
     const { projselected, projectCurrent } = projectsContext;

     //Destructurin del context para obtener el state de projecSelecte 
     const tasksContext = useContext(taskContext);
     const { getTasks } = tasksContext;

    //Funcion para agregar el proyecto actual
    const selectedProject = id => {
        projectCurrent(id);//seleccionando proyecto
        getTasks(id); //filtrando tareas segun el proyecto seleccionado
    }

    return ( 

        <Grow in={true} timeout={{ enter: 1000, exit: 200 }} >

        <ListItem
            button
            selected={projselected ? projselected._id === project._id : false}
            onClick={event => {
                selectedProject(project._id)
                if (handleDrawerToggle) {
                    handleDrawerToggle()
                }

            }}
        >

            <ListItemIcon>
                <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={project.name} />

        </ListItem>

    </Grow>

        // <li>
        //     <button
        //     type="button"
        //     className="btn btn-blank"
        //     onClick= {()=> selectedProject(project._id)}
        //     >{project.name}</button>
        // </li>
     );
}
 
export default Project;