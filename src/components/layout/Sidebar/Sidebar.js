import React from 'react';
import NewProject from '../../projects/NewProject';
import ListProject from '../../projects/ListProject';
import useStyles from './style';

//MATERIA UI
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

const Sidebar = (props) => {
    const classes = useStyles();

    
    
    return ( 
        <Drawer
            className={classes.drawer}
            classes={{
            paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <div className={classes.toolbar} />
            <Divider />

              <NewProject/>

            <Divider />

            <ListProject/>

        </Drawer>
     );
}
 
export default Sidebar;