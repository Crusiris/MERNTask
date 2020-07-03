import React, { useContext, useState } from 'react';
import { Container, Button, Typography, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';
//Context
import ProjectContext from '../../context/projects/projectContext';

const DeleteProject = () => {
    //estilos
    const classes = useStyles();
    //Context
    const projectContext = useContext(ProjectContext);
    const { projselected, deleteproject } = projectContext;

    //Destructuring del state projselected
    const [ projectCurrent ] = projselected;

    const onClickProjectDelete = () => {
        deleteproject(projectCurrent._id);
    }


    return (
        
        <Container className={classes.container}>
            <Grid container direction="column" spacing={2} >
                <Grid item>
                    <Typography className={classes.underline}>Dangerous zone</Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={onClickProjectDelete}
                    >
                        Delete Project
                    </Button>
                </Grid>
            </Grid>
            {/* {open &&
                <ConfirmationDialog open={open} handleCancel={handleCancel} handleDeleteProject={handleDeleteProject} projectName={actualProject.name} />
            } */}

        </Container>

    );
}

export default DeleteProject;