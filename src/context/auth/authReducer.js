//importando type
import { SINGIN_SUCCESS, SINGIN_FAILURE, GET_USER, LOGIN_SUCCESS, LOGIN_FAILURE, SIGN_OFF} from '../../types'; 

export default (state, action) => {

    switch (action.type) {
        case LOGIN_SUCCESS:
        case SINGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            return {
               ...state,
               authenticated:true,
               message:null
            }
        case SIGN_OFF:
        case LOGIN_FAILURE:
        case SINGIN_FAILURE:
            localStorage.removeItem('token');
            return {
               ...state,
               token:null,
               user:null,
               authenticated:null,
               message:action.payload    
            }
        case GET_USER:
            return {
                ...state,
                authenticated:true,
                user:action.payload
            }    
       
        default:
            return state;
        }
    }          