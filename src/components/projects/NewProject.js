import React, { Fragment, useState } from 'react'

const NewProject = () => {

    //useState para proyecto nuevo
    const [project, saveProject]= useState({
        name:''
    });

    //Extraer name de project
    const { name } = project;

    //Funcion para obtener nombre del proyecto y guardarlo en el state de proyecto nuevo
    const onChangeProjects = e =>{

        saveProject({
            ...project,
            [e.target.name] : e.target.value
        });
    }

    //Funcion que envia el proyecto
    const onSubmitProject = e =>{
        e.preventDefault();

        //Validar el proyecto

        //Agregar al state

        //Reiniciar form
    }




    return ( 
        <Fragment>

            <button type="button" className="btn btn-block btn-primario">
                Nuevo proyecto
            </button>

            <form className="formulario-nuevo-proyecto"
              onSubmit={onSubmitProject}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    value={name}
                    name="name"
                    onChange={onChangeProjects}
                />

                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />

                
            </form>
        </Fragment>
     );
}
 
export default NewProject;