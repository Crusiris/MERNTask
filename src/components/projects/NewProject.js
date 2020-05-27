import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    //obteniendo el  context con useContext
    const projectsContext = useContext(projectContext);
    //Destructurin del context
    const { form, errorform, showFormAddProject, addProject, showErrorMsj } = projectsContext;

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
        if (name===""){
            showErrorMsj()
            return null
        }

        //Agregar al state[OJO STA FUNCION VIENE DESDE EL CONTEXT]
        addProject(project);

        //Reiniciar form
        saveProject({
            name:""
        })
    }

    //Mostrar formulario
    const onClickForm = ()=> {
        showFormAddProject();
    }




    return ( 
        <Fragment>

            <button 
                type="button" 
                className="btn btn-block btn-primario" 
                onClick={onClickForm}
            >
                Nuevo proyecto
            </button>

            { form ?
                    (
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
                    ) : null }

                    {errorform ?<p className="mensaje error"> El nombre del proyecto es obligatorio </p> : null}
        </Fragment>
     );
}
 
export default NewProject;