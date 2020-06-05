import React,{ useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';

const Bar = () => {
 //Extraer la context
 const authContext = useContext(AuthContext);
 const {user, userAuth } = authContext;

 useEffect(() => {
    userAuth();
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

    return ( 
        <header className="app-header">
            {user ? <p className="nombre-usuario">Hola <span>{user.name}</span> </p> : null}
            
            <nav className="nav-principal">
                <a href="#!">Cerrar sesion</a>
            </nav>

        </header>
     );
}
 
export default Bar;