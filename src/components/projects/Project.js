import React,{ useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({project}) => {

     //obteniendo el  context con useContext
     const projectsContext = useContext(projectContext);

     //Destructurin del context para obtener el state de projecSelecte
    const { projectCurrent } = projectsContext;

    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick= {()=> projectCurrent(project.id)}
            >{project.name}</button>
        </li>
     );
}
 
export default Project;