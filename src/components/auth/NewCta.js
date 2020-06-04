import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ValidationContext from '../../context/validation/validationContext';
import AuthContext from '../../context/auth/authContext';

const NewCta = (props) => {

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
        
    }, [message, authenticated, ]);

    //State para datos login
    const [ user, saveUser ] = useState({
        name:'',
        email:'',
        password:'',
        confirm:''
    })

    //Destructuring de user
    const { name, email, password, confirm } =  user;

    //Obteniendo los datos del input y guardandolos en el state
    const onChangeLogin= (e) =>{
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const signIn = e =>{
        e.preventDefault();

        //Validando que no existan campos vacios
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === ''){
            showMsjAlert('Todos los campos son obligatorios','alerta-error');
            return;
        }
        //Validando que el password sea de minimo 6 caracteres
        if(password.length < 6 ){
            showMsjAlert('El Password debe ser de 6 caracteres','alerta-error');
            return;
        }
        //Validando que los password son iguales
        if(password !== confirm ){
            showMsjAlert('Los Passwords no coinciden ','alerta-error');
            return;
        }
        //Funcion que inicia sesion
        singInUser({
            name,
            email,
            password
        })
    }

    return (   
        <div className="form-usuario">
            {alertmsg ? (<div className={`alerta ${alertmsg.category}`}> {alertmsg.msg} </div>) :null}
            <div className="contenedor-form sombra-dark" >
                    <h1>Obtener Cuenta</h1>

                    <form
                    onSubmit={signIn}
                    >
                        <div className="campo-form">
                            <label htmlFor="name">Nombre</label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Tu Nombre"
                                onChange={onChangeLogin}
                                />
                        </div>

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
                            <label htmlFor="Confirmar Password">Confirmar Password</label>
                            <input 
                                type="password"
                                id="confirm"
                                name="confirm"
                                value={confirm}
                                placeholder="Repite Tu Password"
                                onChange={onChangeLogin}
                                />
                        </div>

                        <div className="campo-form">
                            <input
                            type="submit" className="btn btn-primario btn-block"
                            value="Registrarme"
                            />
                        </div>
                    </form>

                    <Link to={'/'} className="enlace-cuenta">
                        Ya tengo cuenta
                    </Link>
            </div>

        </div>
     );
}
 
export default NewCta;