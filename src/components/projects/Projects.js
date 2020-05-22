import React from 'react';
import Sidebar  from '../layout/Sidebar';
import Bar  from '../layout/Bar';
import FormTask  from '../task/FormTask';
import ListTask  from '../task/ListTask';

const Projects = () => {
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