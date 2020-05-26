import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProject = () => {
    //Obteniendo context
    const projectsContext = useContext(projectContext);
   //Destructurin del context
   const { projects, getProject } = projectsContext;

   useEffect(() => {
    getProject()
      
   },[])

   if(projects.length === 0) return null;


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

