import React,{ useContext, useEffect } from 'react';
import Sidebar  from '../layout/Sidebar';
import Bar  from '../layout/Bar';
import FormTask  from '../task/FormTask';
import ListTask  from '../task/ListTask';
import AuthContext from '../../context/auth/authContext';

const Projects = () => {
    //Extraer la context
    const authContext = useContext(AuthContext);
    const { userAuth } = authContext;

    useEffect(() => {
        userAuth();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ( 
        <div className="contenedor-app">
            <Sidebar/>

            <div className="seccion-principal">
                <Bar/>
                <main>
                    <FormTask/>
                    <div className="contenedor-tareas">
                        <ListTask/>
                    </div>
                    
                </main>
            </div>
        </div>
       
    );
}
 
export default Projects;