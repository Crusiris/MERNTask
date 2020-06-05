//importando type
import { SINGIN_SUCCESS, SINGIN_FAILURE, GET_USER, LOGIN_SUCCESS, LOGIN_FAILURE, SIGN_OFF} from '../../types'; 

export default (state, action) => {

    switch (action.type) {

        case SINGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            return {
               ...state,
               authenticated:true,
               message:null
            }

        case LOGIN_FAILURE:
        case SINGIN_FAILURE:
            localStorage.removeItem('token');
            return {
               ...state,
               token:null,
               message:action.payload    
            }
        // case GET_USER:
        //     return {
                       
        //     }    
        // case LOGIN_SUCCESS:
        //     return {
                           
        //     }
        
        // case SIGN_OFF:
        //     return {
                           
        //     }
        default:
            return state;
        }
    }          