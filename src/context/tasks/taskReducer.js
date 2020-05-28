import { TASKS_PROJECT, ADD_TASK, ERROR_TAREAFORM, DELETE_TASK, STATE_TASK, TASK_CURRENT } from '../../types'; //importando type

export default (state, action) => {
    switch (action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksProject: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
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
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case STATE_TASK:
                return {
                    ...state,
                    tasks: state.tasksProject.map(task => task.id === action.payload.id ? action.payload : task)
                }
        case TASK_CURRENT:
                return {
                    ...state,
                    taskselect:action.payload
                }
        default:
            return state;
    }
}