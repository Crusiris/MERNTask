import React from 'react';
import Project from './Project';

const ListProject = () => {

    //Object mientras
    const projects=[
        {name: 'Tienda Virtual'},
        {name: 'Intranet'},
        {name:'Diseño de sitio web'}
    ]

    return ( 
        <ul className="listado-proyectos">
            {projects.map(project=>(
                    <Project
                    project={project}
                    />
            ))}
        </ul>
     );
}
 
export default ListProject;

