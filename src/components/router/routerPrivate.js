import React,{ useEffect, useContext, Component }from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

//Higher Order Components
const RouterPrivate = ({ component:Component, ...props })=>{
const authContext = useContext(AuthContext);
const { authenticated, loading, userAuth } = authContext;

useEffect(()=>{
    userAuth();
}, [])

    return(
        <Route { ...props } render={ props => !authenticated && !loading ? (
            <Redirect to="/" />
        ) :  (
            <Component{...props} />
        )}/>
    );

}

export default RouterPrivate;
