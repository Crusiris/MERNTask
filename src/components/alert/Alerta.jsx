import React from 'react';
import clsx from 'clsx';
import {Snackbar, SnackbarContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  success:{
    backgroundColor: theme.palette.disabled.main,
  },
  error:{
    backgroundColor:theme.palette.error.dark
  },
  info:{
    backgroundColor:theme.palette.primary.main,
  },
  icon:{
    fontSize:20
  },
  iconVariant:{
    opacity:0.9,
    marginRight:theme.spacing(1)
  },
  message:{
    display:'flex',
    alignItems:'center'
  }
}));

const Alerta = ({message, type, autoclose }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return(

    <div className={classes.root}>
       <Snackbar open={open} autoHideDuration={autoclose} onClose={handleClose}>
          <SnackbarContent 
            className={clsx(classes[type])}
            onClose={handleClose} 
            message={
              <span id="client-snackbar" className={classes.message}>
                <Icon className={clsx(classes.icon, classes.iconVariant)}>
                  {type}
                </Icon>
                {message}
              </span>
            }
            action={[
              <IconButton key="close" arial-label="close" color="inherit" onClick={handleClose}>
                <Icon className={classes.icon}>close</Icon>
              </IconButton>
            ]}
          />
      </Snackbar>
    </div>
  );
}

export default Alerta;