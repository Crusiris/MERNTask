import React,{ useContext, useEffect } from 'react';
import Sidebar  from '../layout/Sidebar/Sidebar';
import Bar  from '../layout/Bar/Bar';
import FormTask  from '../task/FormTask';
import ListTask  from '../task/ListTask';
import AuthContext from '../../context/auth/authContext';
import useStyles from './style';
import { Hidden } from '@material-ui/core';

const Projects = () => {
    const classes = useStyles()
    const [toshow, setToshow] = React.useState(false);
    //Extraer la context
    const authContext = useContext(AuthContext);
    const { userAuth } = authContext;



    useEffect(() => {
        userAuth();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDrawerToggle = () => {
        setToshow(!toshow);
      };

    return ( 
        
        <div className={classes.root}>
            <Bar handleDrawerToggle={handleDrawerToggle}/>
            
            <Hidden xsDown>
                 <Sidebar
                 handleDrawerToggle={handleDrawerToggle}
                 variant="permanent"
                 open={true}
                 />
            </Hidden>

            <Hidden smUp>
                 <Sidebar
                 handleDrawerToggle={handleDrawerToggle}
                 variant="temporary"
                 open={toshow}
                 onClose={handleDrawerToggle}
                 />
            </Hidden>
            

            <div>
                <div className={classes.toolbar}></div>
                
                <main className={classes.content}>
                    <FormTask/>
                    <div className="contenedor-tareas">
                        <ListTask handleDrawerToggle={handleDrawerToggle}/>
                    </div>
                    <button >abrir</button>
                </main>
            </div>
        </div>
       
    );
}
 
export default Projects;