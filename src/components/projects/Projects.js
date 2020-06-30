import React,{ useContext, useEffect } from 'react';
import Sidebar  from '../layout/Sidebar/Sidebar';
import Bar  from '../layout/bar/Navbar';
import ContainerMain from './ContainerMain';
import AuthContext from '../../context/auth/authContext';
import useStyles from './style';
//Material UI
import { Hidden } from '@material-ui/core';

const Projects = () => {
    const classes = useStyles();
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
            
            <div className={classes.content}>
              <div className={classes.toolbar}></div>

                <ContainerMain handleDrawerToggle={handleDrawerToggle}/>
            
            </div>
            
        </div>
       
    );
}
 
export default Projects;