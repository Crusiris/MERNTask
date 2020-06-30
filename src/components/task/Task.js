import React, {Fragment, useContext, useState} from 'react';
//import EditTask from './EditTask';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { Grid, Typography, Paper, Button, IconButton, Grow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';

const Task = ({task}) => {
    const classes = useStyles();
//Obteniendo context en el componente
  const projecstContext = useContext(projectContext);
//Destructuring del context [Extrayendo los state y funciones que necesitaremos]
  const { projselected } = projecstContext;


////Obteniendo context en el componente
const tasksContext = useContext(taskContext);
//Destructuring del context [Extrayendo los state y funciones que necesitaremos]
const { deleteTask, updateTask, selecTaskCurrent} = tasksContext;


//Destructuring del state projselected
const [ projectCurrent ] = projselected;

 // State Locales
 const [elevation, setElevation] = useState(1);
 const [animation, setAnimation] = useState(true);
 const [edit, setEdit] = useState(false);

  // Funtions
  const handleMouseEnter = () => {
    setElevation(4);
}
const handleMouseLeave = () => {
    setElevation(1);
}

const handleEdit = () => {
    setEdit(true);
}
//Funcion eliminar tarea
const onClickDelete = id =>{
    setTimeout(() => {
    deleteTask(id, projectCurrent._id);
   // getTasks(projectCurrent.id);
  }, 200);

  setAnimation(false);
}

//Cambiar estado de tarea
const changeState = task =>{
    if(task.state){
        task.state = false;
    }else{
        task.state = true;
    }
   
    updateTask(task);
}

//Obteniendo tarea a editar
const selectTask = task => {
    selecTaskCurrent(task)
}



    return ( 

        <Fragment>
            
                {/* <EditTask taskToEdit={task} setEdit={setEdit} /> */}
                <Grid item >
                    <Grow in={animation} timeout={{ enter: 1000, exit: 200 }} unmountOnExit>
                        <Paper className={classes.paper} elevation={elevation} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Grid container direction="row" justify="space-between" alignItems="center" spacing={1}>
                                <Grid item xl={10} lg={9} md={8} sm={12} xs={12}>
                                    <Typography variant="subtitle1" className='textIn'>{task.name}</Typography>
                                </Grid>

                                <Grid item xl={2} lg={3} md={4} sm={12} xs={12}>
                                    <Grid container direction="row" justify="flex-end" alignItems="center" spacing={1}>
                                        {task.state ?
                                            <Button color="primary" className={classes.btn} onClick={()=> changeState(task)}>Completed</Button>
                                            :
                                            <Button color="secondary" className={classes.btn} onClick={()=> changeState(task)} >Incomplete</Button>
                                        }
                                        <IconButton aria-label="delete" size="small" className={classes.btn} onClick={handleEdit}>
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="small" className={classes.btn} onClick={onClickDelete} >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grow>

                </Grid>
    
        </Fragment>




        // <li className="tarea sombra">
        //     <p>{task.name}</p>
        //     <div className="estado">
        //             {task.state
        //             ?
        //                 (
        //                     <button
        //                     type="button"
        //                     className="completo"
        //                     onClick={()=> changeState(task)}
        //                     >Completo</button>
        //                 )
        //             :
                        
        //                 (
        //                     <button
        //                     type="button"
        //                     className="incompleto"
        //                     onClick={()=> changeState(task)}
        //                     >Incompleto</button>
        //                 )

        //             }
        //     </div>
        //     <div className="acciones">
        //         <button
        //         type="button"
        //         className="btn btn-primario"
        //         onClick={()=> selectTask(task)}
        //         >Editar</button>

        //         <button
        //         type="button"
        //         className="btn btn-secundario"
        //         onClick={ () => onClickDelete(task._id) }
        //         >Eliminar</button>
        //     </div>

        // </li>
    );
}
 
export default Task;