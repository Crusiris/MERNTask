import React, {useContext } from 'react';
import Task from './Task';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';
import useStyles from './style';

//Material UI imports
import { Container, Typography } from '@material-ui/core';

const ListTask = ({handleDrawerToggle}) => {
    const classes = useStyles();
    //Obteniendo context en el componente
    const projectContext = useContext(ProjectContext);

    //Destructuring del context [Extrayendo los state y funciones que necesitaremos]
    const { projselected, deleteproject } = projectContext;

    //Destructurin del context para obtener el state de projecSelecte 
    const tasksContext = useContext(TaskContext);
    const { tasksProject } = tasksContext;

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