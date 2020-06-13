import { SHOW_MSG, HIDE_MSG } from '../../types'; //importando types

export default (state, action) => {

    switch (action.type) {

        case SHOW_MSG:
            return {
                alertmsg: action.payload
            }

        case HIDE_MSG:
            return {
                alertmsg: null
            }

        default:
            return state;
    }
}