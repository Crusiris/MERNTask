import React, {useState} from 'react';
import { Link } from 'react-router-dom';
 
const NewCta = () => {

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

    const onSubmit = e =>{
        e.preventDefaul();

        //Validaciones

        //Funcion que inicia sesion
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark" >
                    <h1>Obtener Cuenta</h1>

                    <form
                    onSubmit={onSubmit}
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