import React, { useContext, useEffect } from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ValidationContext from '../../context/validation/validationContext';

const ListProject = () => {
    const validationContext = useContext(ValidationContext);
    const { alertmsg, showMsjAlert } = validationContext;
    //Obteniendo context
    const projectsContext = useContext(ProjectContext);
   //Destructurin del context
   const { projects, message, getProject } = projectsContext;
   

   useEffect(() => {
    //Si hay un mensaje entonces se llama la funcion mostrar alerta, que es la funcion que modifica el mensaje de alerta
    if(message){
        showMsjAlert(message.msg, message.category)
    }

    getProject();
    // eslint-disable-next-line
   },[message])

   if(projects.length === 0) return <p>No hay proyectos, Comienza creando uno.</p>;


    return ( 
        <ul className="listado-proyectos">
            {alertmsg ? (<div className={`alerta ${alertmsg.category}`}> {alertmsg.msg} </div>) :null}
            <TransitionGroup>
                {projects.map(project=>(
                       <CSSTransition key={project._id} timeout={200} className="tarea">
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

