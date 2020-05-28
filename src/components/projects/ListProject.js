import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProject = () => {
    //Obteniendo context
    const projectsContext = useContext(projectContext);
   //Destructurin del context
   const { projects, getProject } = projectsContext;

   useEffect(() => {
    getProject()
      
   },[])

   if(projects.length === 0) return <p>No hay proyectos, Comienza creando uno.</p>;


    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projects.map(project=>(
                       <CSSTransition  key={projects.id} timeout={200} className="tarea">
                            <Project
                            project={project}
                            />
                       </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListProject;

