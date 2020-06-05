import React, { useReducer } from 'react'; //importando useReduce
import AuthContext from './authContext'; //importando task context
import AuthReducer from './authReducer'; //importando reducer
import { SINGIN_SUCCESS, SINGIN_FAILURE, GET_USER, LOGIN_SUCCESS, LOGIN_FAILURE, SIGN_OFF } from '../../types'; //importando type
import clientAxios from '../../config/axios'; //Importando cliente axios
import tokenAuth from '../../config/tokenAuth';

//Creando el provider
const AuthState = props => {
    //Declarando un state inicial 
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //FUNCIONES
    //Registrar usuario
    const singInUser = async data => {
        try {
            const res = await clientAxios.post('/api/usuarios', data);
            

            dispatch({
                type: SINGIN_SUCCESS,
                payload:res.data
            })

            //Obtener el usuario
            userAuth();

        } catch (error) {
           // console.log(error.response.data.msg);

            const alertmsg = {
                msg:error.response.data.msg,
                category:'alerta-error'
            }
            dispatch({
                type: SINGIN_FAILURE,
               payload: alertmsg
            })
        }
    }

    //Retornar el usuario autenticado
    const userAuth = async()=>{
        //Obtenemos token alojado en el localstorage
        const token = localStorage.getItem('token');
        if(token){
            //Funcion para enviar el token al backend a traves de los headers
            tokenAuth(token);
        }

        try {
            const res = await clientAxios.get('/api/auth');
            console.log(res);
            dispatch({
                type: GET_USER,
               payload: res.data
            })
        } catch (error) {
            dispatch({
                type:LOGIN_FAILURE
            })
        }
    }

    return ( <AuthContext.Provider
         value = {
            {
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                singInUser
            }
        }> { props.children } 
        </AuthContext.Provider>
    )
}

export default AuthState;