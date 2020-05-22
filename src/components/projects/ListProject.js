import React, { useContext } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProject = () => {

    const projectsContext = useContext(projectContext);
   //Destructurin del context
   const { projects } = projectsContext;

    return ( 
        <ul className="listado-proyectos">
            {projects.map(project=>(
                    <Project
                    key={projects.id}
                    project={project}
                    />
            ))}
        </ul>
     );
}
 
export default ListProject;

