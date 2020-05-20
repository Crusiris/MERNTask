import React, {useState} from 'react';
import { Link } from 'react-router-dom';
 
const Login = () => {

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
        e.preventDefaul();

        //Validaciones

        //Funcion que inicia sesion
    }

    return ( 
        <div className="form-usuario">
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