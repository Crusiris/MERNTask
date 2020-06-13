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
        message: null,
        loading:true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //FUNCIONES
    //REGISTRAR USUARIO
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
           //console.log(error.response);

            const alertmsg = {
                msg:error.response.data.msg,
                category:'error'
            }
            dispatch({
                type: SINGIN_FAILURE,
               payload: alertmsg
            })
        }
    }

    //OBTIENE Y RETORNA el usuario autenticado
    const userAuth = async()=>{
        //Obtenemos token alojado en el localstorage
        const token = localStorage.getItem('token');
        if(token){
            //Funcion para enviar el token al backend a traves de los headers
            tokenAuth(token);
        }

        try {
            const res = await clientAxios.get('/api/auth');
            dispatch({
                type: GET_USER,
               payload: res.data.user
            })
        } catch (error) {
            dispatch({
                type:LOGIN_FAILURE
            })
        }
    }

    //INICIO DE SESION 
    const logIn = async data =>{
        try {
            //Peticion post al ENDPOIND
            const res = await clientAxios.post('/api/auth', data);
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data
            });

             //Obtener el usuario
             userAuth();

        } catch (error) {
           // console.log(error.response.data.msg);
            const alertmsg = {
               msg:error.response.data.msg,
               category:'error'
            }
            dispatch({
                type: LOGIN_FAILURE,
               payload: alertmsg
            })
        }
    }

    //Cerrar sesion
    const signOff = () =>{
        dispatch({
            type: SIGN_OFF
        })
    }

    return ( <AuthContext.Provider
         value = {
            {
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading:state.loading,
                singInUser,
                logIn,
                userAuth,
                signOff
            }
        }> { props.children } 
        </AuthContext.Provider>
    )
}

export default AuthState;