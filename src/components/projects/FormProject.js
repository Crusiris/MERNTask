import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
// @Material-UI imports
import {ListItem,Button,FormControl,InputAdornment,InputLabel, OutlinedInput, Container, FormHelperText, Grid
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

const FormProject = () => {
    //obteniendo el  context con useContext
    const projectsContext = useContext(projectContext);
    //Destructurin del context
    const { form, errorform, showFormAddProject, hideFormAddProject, addProject, showErrorMsj } = projectsContext;
    //State LOCAL para proyecto nuevo
    const [project, saveProject]= useState({
        name:''
    });

     //Extraer name de project
     const { name } = project;

     const [helper, setHelper] = useState('');
     

     //Funcion para obtener nombre del proyecto y guardarlo en el state de proyecto nuevo
     const onChangeProjects = e =>{
 
         saveProject({
             ...project,
             [e.target.name] : e.target.value
         });

            setHelper('');
     }

     const handleCancel = () => {
        saveProject({ name: '' })
        setHelper('');
        hideFormAddProject();
    }
     
     //Mostrar formulario
    const onClickForm = ()=> {
        showFormAddProject();
    }

    //Funcion que envia el proyecto
    const onSubmitProject = e =>{
        e.preventDefault();

        //Validar el proyecto
        if (name===""){
            showErrorMsj()
            return null
        }

        //Agregar al state[OJO STA FUNCION VIENE DESDE EL CONTEXT]
        addProject(project);

        //Reiniciar form
        saveProject({
            name:""
        })
    }

    return (

        <Fragment>
            {form ?
           <ListItem>
             <Grid container direction="column" justify="center" spacing={1}>
                <Grid item>
                    <form onSubmit={onSubmitProject}>
                        <FormControl fullWidth variant="outlined" error={errorform} size="small">
                        <InputLabel htmlFor="outlined-adornment-password">Project's name</InputLabel>

                        <OutlinedInput
                                autoFocus
                                multiline
                                rowsMax={4}
                                id="name-of-the-project"
                                type='text'
                                name="name"
                                value={name}
                                onChange={onChangeProjects}
                                autoComplete="off"
                                endAdornment={
                                <InputAdornment position="end">
                                    <Button type="submit">
                                        Add
                                    </Button>
                                </InputAdornment>
                                }
                                abelWidth={110} />
                        <FormHelperText>{helper}</FormHelperText>
                    </FormControl>
                </form>
                </Grid>
                <Grid item>
                    <Grid container justify="flex-end">
                        <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        startIcon={<CloseIcon />}
                        onClick={handleCancel}>
                        cancel
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
           </ListItem>
           :
                <ListItem>
                    <Container>

                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<AddIcon />}
                            onClick={onClickForm}
                        >
                            New project
                </Button>
                    </Container>
                </ListItem>
            }

        </Fragment>
        
    );
}

export default FormProject;