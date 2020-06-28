import React from 'react';
import NewProject from '../../projects/NewProject';
import ListProject from '../../projects/ListProject';
import useStyles from './style';

//MATERIA UI
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

const Sidebar = ({variant, open, onClose, handleDrawerToggle}) => {
    const classes = useStyles();

 
    return ( 
        <Drawer
            className={classes.drawer}
            classes={{
            paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={variant}
            open={open}
            onClose={onClose ? onClose : null}
        >
            <div className={classes.toolbar} />
            <Divider />

              <NewProject/>

            <Divider />

            <ListProject handleDrawerToggle={handleDrawerToggle} />

        </Drawer>
     );
}
 
export default Sidebar;