import {
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR,
    CLEAR_ALERTS, 
    SHOW_ALERTS,
    CREATE_FILE_SUCCESS,
    CREATE_FILE_ERROR } from '../../types';


// const initialState = {
//     file_msg: null,
//     name: '',
//     original_name: ''
// }

const AppReducer = (state, action) => {
    switch (action.type){
        case UPLOAD_FILE:
            return {
                ...state,
                loading: true
            }
        case UPLOAD_FILE_ERROR:
        case SHOW_ALERTS: 
            return {
                ...state,
                file_msg: action.payload,
                loading: null
            }
        case CLEAR_ALERTS: 
            return {
                file_msg: null
            }
        case UPLOAD_FILE_SUCCESS: 
            return {
                ...state,
                name: action.payload.name,
                original_name: action.payload.original_name,
                loading: null
            }
        case CREATE_FILE_SUCCESS:
            return {
                ...state,
                url: action.payload
            }
        default:
            return state
    }
}

export default AppReducer