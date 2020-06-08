import React,{ useEffect, useContext }from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

//Higher Order Components
const RouterPrivate = ({ component:Component, ...props })=>{
const authContext = useContext(AuthContext);
const { authenticated, loading, userAuth } = authContext;

useEffect(()=>{
    userAuth();
   // eslint-disable-next-line react-hooks/exhaustive-deps
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
