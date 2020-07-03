import React, { useReducer } from 'react';
import validationContext from './validationContext';
import validationReducer from './validationReducer';
import {SHOW_MSG, HIDE_MSG} from '../../types';//importando types


const ValidationState = props =>{

    const initialState = {
        alertmsg:''
    }

    const [ state, dispatch ]= useReducer(validationReducer, initialState)

    //Funciones
    const showMsjAlert = ( msg, category )=>{
    
        dispatch({
            type:SHOW_MSG,
            payload:{
                msg,
                category
            }
        });

        setTimeout(()=>{
            dispatch({
                type:HIDE_MSG
            })
        },3000);
    }


    return(
        <validationContext.Provider
        value={{
        alertmsg:state.alertmsg,
        showMsjAlert
        }}
        >
            {props.children}
        </validationContext.Provider>
    )
 }
 export default ValidationState;