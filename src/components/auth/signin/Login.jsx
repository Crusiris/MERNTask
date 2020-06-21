import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';//Importando Context
import ValidationContext from '../../../context/validation/validationContext';//Importando Context
import Copyright from '../../copyright/Copyright';//Componente
import Alerta from '../../alert/Alerta';
//Material UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import useStyles from './style';// Style imports

const Login = (props) => {
    const classes = useStyles();

    const validationContext = useContext(ValidationContext);//Extrayendo context usando USECONTEXT()
    const { alertmsg, showMsjAlert } = validationContext; //Extrayendo funciones y state del context

    const authContext = useContext(AuthContext);//Extrayendo context usando USECONTEXT()
    const { message, authenticated, logIn } = authContext;//Extrayendo funciones y state del context

      //En caso de que el usuario ya exista
      useEffect(() => {
        if(authenticated){
            props.history.push('/proyectos')
        }

        if(message){
            showMsjAlert(message.msg, message.category);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message, authenticated, ]);

    //State para datos login
    const [ user, saveUser ] = useState({
        email:'',
        password:''
    })

    //Destructuring de user
    const { email, password } =  user;

    //Obteniendo los datos del input y guardandolos en el state
    const onChangeLogin= e =>{
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //Funcion
    const onSubmit = e =>{
        e.preventDefault();

        //Validando que no existan campos vacios
        if(email.trim() === '' || password.trim() === ''){
            showMsjAlert('Todos los campos son obligatorios', 'error');
            return;
        }
        
        //Funcion que inicia sesion
        logIn({ email, password })
    }

    return ( 

        <Container component="main" maxWidth="xs">

            <CssBaseline />

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmit} >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={onChangeLogin}
                        type="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={onChangeLogin}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >Sign In </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to={'/nueva-cuenta'} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            {alertmsg ? <Alerta  message={alertmsg.msg} type={alertmsg.category} autoclose={3000}/> :null}
     </Container>
     );
}
 
export default Login;