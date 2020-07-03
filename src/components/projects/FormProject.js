import React, { Fragment, useState, useContext } from 'react';
import Alerta from '../alert/Alerta';
import projectContext from '../../context/projects/projectContext';
import ValidationContext from '../../context/validation/validationContext';//Importando Context
// @Material-UI imports
import {ListItem,Button,FormControl,InputAdornment,InputLabel, OutlinedInput, Container, FormHelperText, Grid
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

const FormProject = () => {
    //obteniendo el  context con useContext
    const projectsContext = useContext(projectContext);
    //Destructurin del context
    const { form, showFormAddProject, hideFormAddProject, addProject, showErrorMsj } = projectsContext;
   
    const validationContext = useContext(ValidationContext);//Extrayendo context usando USECONTEXT()
    const { alertmsg, showMsjAlert } = validationContext; //Extrayendo funciones y state del context

   
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
            showMsjAlert("The project's name is required'", 'error');
            return null
        }

        //Agregar al state[OJO STA FUNCION VIENE DESDE EL CONTEXT]
        addProject(project);
        showMsjAlert("The project's created successfully'", 'success');
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
                        <FormControl fullWidth variant="outlined" error={alertmsg} size="small">
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
            {alertmsg ? <Alerta  message={alertmsg.msg} type={alertmsg.category} autoclose={3000}/> :null}
        </Fragment>
        
    );
}

export default FormProject;