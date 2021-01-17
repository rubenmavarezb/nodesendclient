import {
    SUCCESSFUL_REGISTRATION,
    ERROR_REGISTRATION,
    CLEAR_ALERTS, 
    USER_AUTHENTICATED } from '../../types';

const AuthReducer = (state, action) => {
    switch (action.type){
        case SUCCESSFUL_REGISTRATION:
        case ERROR_REGISTRATION:
            return {
                ...state,
                msg: action.payload
            }
        case CLEAR_ALERTS:
            return {
                ...state,
                msg: null
            }
        default:
            return state
    }
}
export default AuthReducer
