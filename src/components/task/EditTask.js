import React, { Fragment, useState, useContext } from 'react';
// Context import
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';
// @Material-UI imports
import { Grid, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, FormHelperText } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const EditTask = ({ taskToEdit, setEdit }) => {
//State locales
 const [taskEdit, setTaskEdit] = useState(taskToEdit);
 const [error, setError] = useState(false);
 const [helper, setHelper] = useState('');

  //Context State
  const taskContext = useContext(TaskContext);
  const { updateTask, selecTaskCurrent, validateFormTask } = taskContext;

  const projectContext = useContext(ProjectContext);
  const { projselected } = projectContext;

  //Destructuring del state projselected
 const [ projectCurrent ] = projselected;

  // Functions
 //Funcion para cancelar la edicion de la tarea
  const handleCancel = () => {
    setError(false);
    setHelper('');
    setEdit(false);
    setTaskEdit(null);
   }

   //Obtniendo tarea a editar en el state
   const handleChange = (e) => {
    setTaskEdit({
        ...taskEdit,
        [e.target.name]:e.target.value
    })
    setError(false);
    setHelper('');
   }

   const handleSubmit = (event) => {
        event.preventDefault();
        
        //LLamando a funcion que actualiza la tarea
        updateTask(taskEdit);
        setEdit(false);

        //Get the actual tasks again
        selecTaskCurrent(projectCurrent._id);
        // Clear fields
        setTaskEdit(null);
    }
 
 return(

    <Fragment>
            <Grid container justify="center" direction="column" spacing={1} >
                <Grid item>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth variant="outlined" error={error}>
                            <InputLabel htmlFor="outlined-adornment-password">Taks' name</InputLabel>
                            <OutlinedInput
                                autoFocus
                                id="name-of-the-task"
                                type='text'
                                value={taskEdit.name}
                                name="name"
                                onChange={handleChange}
                                autoComplete="off"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button type="submit">
                                            Edit
                                                    </Button>

                                    </InputAdornment>
                                }
                                labelWidth={90}
                            />
                            <FormHelperText>{helper}</FormHelperText>
                        </FormControl>
                    </form>
                </Grid>
                <Grid item>
                    <Grid container justify="flex-end">

                        <Button
                            variant="outlined"
                            color="secondary"
                            startIcon={<CloseIcon />}
                            onClick={handleCancel}
                        >
                            cancel
                          </Button>

                    </Grid>
                </Grid>
            </Grid>

        </Fragment>

 );
}
export default EditTask;