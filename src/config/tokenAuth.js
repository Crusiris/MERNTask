import clientAxios from './axios';

//Funcion que coloca el token en los defauls del header
const tokenAuth = token =>{
    if(token){
        //Si hay un token, enviemoslo en el header
        clientAxios.defaults.headers.common['x-auth-token'] = token;
    }else {
        //Sino eliminar del header la politica
        delete clientAxios.defaults.headers.common['x-auth-token'];
    }
}
export default tokenAuth.js;