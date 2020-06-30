import React, { useContext, Fragment } from 'react';
import FormTask  from '../task/FormTask';
import ListTask  from '../task/ListTask';
import home from '../img/home.svg';
import ProjectContext from '../../context/projects/projectContext';
import useStyles from './style';
import { Grid, Divider, Typography, Grow } from '@material-ui/core';

const ContainerMain = ({handleDrawerToggle}) => {
    const classes = useStyles();

    //Obteniendo context en el componente
    const projectContext = useContext(ProjectContext);
    //Destructuring del context [Extrayendo los state y funciones que necesitaremos]
    const { projselected } = projectContext;
 
    return(
       
            <Grid container>
                    { projselected ?
                        <Fragment>
                          <Typography variant="h6" className={classes.typo}>{projselected[0].name}</Typography>
                            <Grid item xs={12} md={12}>
                              <FormTask/>
                            </Grid>
                            <Grid item xs={12} md={12}> 
                             <ListTask handleDrawerToggle={handleDrawerToggle}/>
                            </Grid>
                        </Fragment>
                        :
                        (<Grow in={true} timeout={1000}>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Grid item >
                                    <Typography variant="overline">Let's be productive, select a project to start working on</Typography>
                                </Grid>
                                <Grid item >
                                    <img src={home} alt="homeIMG" className={classes.img} />
                                </Grid>
                            </Grid>
                        </Grow>)
                    }
            </Grid>  
      
    );
};

export default ContainerMain;

