import React, { useContext, useEffect, Fragment } from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/projectContext';
//Importando imagen
import add from '../img/add.svg'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ValidationContext from '../../context/validation/validationContext';
//Material UI imports
import {ListItem,Grid,Typography, Grow } from '@material-ui/core';
import useStyles from './style';//Estilos del componente



const ListProject = ({handleDrawerToggle}) => {
    const classes = useStyles();
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

//    if(projects.length === 0) return <p>No hay proyectos, Comienza creando uno.</p>;


    return ( 

        <Fragment>

        {projects.length > 0 ?


            projects.map((project, i) => (
                <Project key={project._id} project={project} handleDrawerToggle={handleDrawerToggle}/>

            ))
            :
            <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
                <ListItem>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                        <Grid item >
                            <Typography variant="overline">Let's start by creating a new project</Typography>
                        </Grid>
                        <Grid item >
                            <img src={add} alt="addIMG" className={classes.img} />
                        </Grid>


                    </Grid>
                </ListItem>
            </Grow>

        }
    </Fragment>

        // <ul className="listado-proyectos">
        //     {alertmsg ? (<div className={`alerta ${alertmsg.category}`}> {alertmsg.msg} </div>) :null}
        //     <TransitionGroup>
        //         {projects.map(project=>(
        //                <CSSTransition key={project._id} timeout={200} className="tarea">
        //                     <Project
        //                     project={project}
        //                     />
        //                </CSSTransition>
        //         ))}
        //     </TransitionGroup>
        // </ul>
     );
}
 
export default ListProject;

