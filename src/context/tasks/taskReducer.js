import { TASKS_PROJECT, ADD_TASK, ERROR_TAREAFORM, DELETE_TASK, TASK_CURRENT, UPDATE_TASK, CLEAN_TASK} from '../../types'; //importando type

export default (state, action) => {
    switch (action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksProject:action.payload
            }
        case ADD_TASK:
            
            return {
                ...state,
                tasksProject: [ ...state.tasksProject,action.payload],
                errortask: false
            }
        case ERROR_TAREAFORM:
            return {
                ...state,
                errortask: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksProject: state.tasksProject.filter(task => task._id !== action.payload)
            }
        case UPDATE_TASK:   
                return {
                    ...state,
                    tasksProject: state.tasksProject.map(task => task._id === action.payload._id ? action.payload : task)
                }
        case TASK_CURRENT:
                return {
                    ...state,
                    taskselect:action.payload
                }
        case CLEAN_TASK:
            return {
                ...state,
                taskselect:null
            }
        
        default:
            return state;
    }
}