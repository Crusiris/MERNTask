import React, {useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import useStyles from './style';

//Material UI imports
import { Container, Typography } from '@material-ui/core';

const ListTask = ({handleDrawerToggle}) => {
    const classes = useStyles();
    //Obteniendo context en el componente
    const projecstContext = useContext(projectContext);

    //Destructuring del context [Extrayendo los state y funciones que necesitaremos]
    const { projselected, deleteproject } = projecstContext;

    //Destructurin del context para obtener el state de projecSelecte 
    const tasksContext = useContext(taskContext);
    const { tasksProject } = tasksContext;

    //Condicion para cuando no hay ningun proyecto seleccionado
    if(!projselected) return <h2>Selecciona un proyecto</h2>

    //Destructuring del state projselected
    const [ projectCurrent ] = projselected;

    const onClickProjectDelete = () => {
        deleteproject(projectCurrent._id);
    }

    return ( 
        <Container className={classes.container}>
          <Typography className={classes.underline}>Tasks</Typography>

          <br />
            {tasksProject &&
                tasksProject.map((task, i) => (

                    <Task key={task._id} task={task} handleDrawerToggle={handleDrawerToggle}/>

                ))

            }
        </Container>
    );
}
 
export default ListTask;