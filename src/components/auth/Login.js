import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';//Importando Context
import ValidationContext from '../../context/validation/validationContext';//Importando Context
 
const Login = () => {

    const validationContext = useContext(ValidationContext);//Extrayendo context usando USECONTEXT()
    const { alertmsg, showMsjAlert } = validationContext; //Extrayendo funciones y state del context

    const authContext = useContext(AuthContext);//Extrayendo context usando USECONTEXT()
    const { message, authenticated, logIn } = authContext;//Extrayendo funciones y state del context

    //State para datos login
    const [ user, saveUser ] = useState({
        email:'',
        password:''
    })

    //Destructuring de user
    const { email, password } =  user;

    //Obteniendo los datos del input y guardandolos en el state
    const onChangeLogin= (e) =>{
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();

        //Validando que no existan campos vacios
        if(email.trim() === '' || password.trim() === ''){
            showMsjAlert('Todos los campos son obligatorios','alerta-error');
            return;
        }

        //Funcion que inicia sesion
        logIn({ email, password })
    }

    return ( 
        <div className="form-usuario">
             {alertmsg ? (<div className={`alerta ${alertmsg.category}`}> {alertmsg.msg} </div>) :null}
            <div className="contenedor-form sombra-dark" >
                    <h1>Iniciar sesion</h1>

                    <form
                    onSubmit={onSubmit}
                    >
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Tu Email"
                                onChange={onChangeLogin}
                                />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="Password">Password</label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Tu Password"
                                onChange={onChangeLogin}
                                />
                        </div>

                        <div className="campo-form">
                            <input
                            type="submit" className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                            />
                        </div>
                    </form>

                    <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                        Obtener Cuenta
                    </Link>
            </div>

        </div>
     );
}
 
export default Login;