import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ValidationContext from '../../../context/validation/validationContext';
import AuthContext from '../../../context/auth/authContext';
import Copyright from '../../copyright/Copyright';//importando componente
import Alerta from '../../alert/Alerta';

//Importaciones de  material ui
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

  

const NewCta = (props) => {
    const classes = useStyles();

    //Extraer los valores del context
    const validationContext = useContext(ValidationContext);
    const { alertmsg, showMsjAlert } = validationContext

    const authContext = useContext(AuthContext);
    const {message, authenticated, singInUser} = authContext;

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

    //State local para datos login  
    const [ user, saveUser ] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmpassword:''
    })

    //Destructuring de user
    const { firstName, lastName, email, password, confirmpassword } =  user;

    //Funcion que obtiene los datos del campo, suministrados por el usuario [EN TIEMPO REAL] y los guarda en el state
    const onChangeLogin= (e) =>{
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const signIn = e =>{
        e.preventDefault();

        //Validando que no existan campos vacios
        if(firstName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmpassword.trim() === ''){
            showMsjAlert('Todos los campos son obligatorios');
            return;
        }
        //Validando que el password sea de minimo 6 caracteres
        if(password.length < 6 ){
            showMsjAlert('El Password debe ser de 6 caracteres');
            return;
        }
        //Validando que los password son iguales
        if(password !== confirmpassword ){
            showMsjAlert('Los Passwords no coinciden');
            return;
        }
        //Funcion que inicia sesion
        singInUser({
            firstName,
            lastName,
            email,
            password
        })
    }

    return (   
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <form className={classes.form} noValidate  onSubmit={signIn}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                value={firstName}
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={onChangeLogin}
                            />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    value={lastName}
                                    autoComplete="lname"
                                    onChange={onChangeLogin}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={email}
                                    autoComplete="email"
                                    onChange={onChangeLogin}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    value={password}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={onChangeLogin}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirmpassword"
                                    value={confirmpassword}
                                    label="Password"
                                    type="password"
                                    id="confirmpassword"
                                    autoComplete="current-password"
                                    onChange={onChangeLogin}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>

                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                            <Link to={'/'} variant="body2">
                                Already have an account? Sign in
                            </Link>
                            </Grid>
                        </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
            {alertmsg ? <Alerta  message={alertmsg} type="error" autoclose={2000}/> :null}
            </Container>





        // <div className="form-usuario">
        //     {alertmsg ? (<div className={`alerta ${alertmsg.category}`}> {alertmsg.msg} </div>) :null}
        //     <div className="contenedor-form sombra-dark" >
        //             <h1>Obtener Cuenta</h1>

        //             <form
        //             onSubmit={signIn}
        //             >
        //                 <div className="campo-form">
        //                     <label htmlFor="name">Nombre</label>
        //                     <input 
        //                         type="text"
        //                         id="name"
        //                         name="name"
        //                         value={name}
        //                         placeholder="Tu Nombre"
        //                         onChange={onChangeLogin}
        //                         />
        //                 </div>

        //                 <div className="campo-form">
        //                     <label htmlFor="email">Email</label>
        //                     <input 
        //                         type="email"
        //                         id="email"
        //                         name="email"
        //                         value={email}
        //                         placeholder="Tu Email"
        //                         onChange={onChangeLogin}
        //                         />
        //                 </div>

        //                 <div className="campo-form">
        //                     <label htmlFor="Password">Password</label>
        //                     <input 
        //                         type="password"
        //                         id="password"
        //                         name="password"
        //                         value={password}
        //                         placeholder="Tu Password"
        //                         onChange={onChangeLogin}
        //                         />
        //                 </div>

        //                 <div className="campo-form">
        //                     <label htmlFor="Confirmar Password">Confirmar Password</label>
        //                     <input 
        //                         type="password"
        //                         id="confirm"
        //                         name="confirm"
        //                         value={confirm}
        //                         placeholder="Repite Tu Password"
        //                         onChange={onChangeLogin}
        //                         />
        //                 </div>

        //                 <div className="campo-form">
        //                     <input
        //                     type="submit" className="btn btn-primario btn-block"
        //                     value="Registrarme"
        //                     />
        //                 </div>
        //             </form>

        //             <Link to={'/'} className="enlace-cuenta">
        //                 Ya tengo cuenta
        //             </Link>
        //     </div>

        // </div>
     );
}
 
export default NewCta;