import React from 'react';
import FormProjec from './FormProject';
import { List, ListSubheader, Divider } from '@material-ui/core';
import useStyles from './style';//Estilos del componente

const NewProject = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <List
                component="nav"
                aria-label="main mailbox folders"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Projects
                     </ListSubheader>
                }>
                <FormProjec/>
            </List>
            <Divider />
        </div>
     );
}
 
export default NewProject;