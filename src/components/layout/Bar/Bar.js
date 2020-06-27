import React,{ useContext, useEffect } from 'react'
import AuthContext from '../../../context/auth/authContext';
import useStyles from './style';//Estilos del componente

//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

const Bar = (props) => {
 const classes = useStyles();
 //Extraer la context
 const authContext = useContext(AuthContext);
 const {user, userAuth, signOff } = authContext;

 useEffect(() => {
    userAuth();
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


// States y funciones para mostrar y ocultar el cerrar sesion MATERIAL UI
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return ( 

        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} onClick={()=> props.handleDrawerToggle()} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    C-tasks
                </Typography>

                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        >

                        <AccountCircle />

                    </IconButton>
                    <Menu
                        id="menu-appbar"
                         anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>
                        {user ?<span>{user.firstName} {user.lastName}</span>: null}
                        </MenuItem>
                        <MenuItem onClick={handleClose} onClick={ ()=> signOff() }>Cerrar sesion</MenuItem>

                    </Menu>
                </div>
               
            </Toolbar>
        </AppBar>
           
     );
}
 
export default Bar;