import React, { useReducer } from 'react';
import AppContext from './appContext';
import AppReducer from './appReducer';
import clearAlerts from '../../helpers/clearAlerts';
import Axios from '../../config/axios';
import {
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR,
    CLEAR_ALERTS, 
    SHOW_ALERTS,
    CREATE_FILE_SUCCESS,
    CREATE_FILE_ERROR } from '../../types';


const AppContextProvider = ({children}) => {

    const initialState = {
        file_msg: null,
        name: '',
        original_name: '',
        loading: null
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const showAlert = msg => {
        dispatch({
            type: SHOW_ALERTS,
            payload: msg
        })

        clearAlerts(dispatch, CLEAR_ALERTS);
    }

    const uploadFile = async (formData, path) => {

        dispatch({
            type: UPLOAD_FILE
        })

        try {
            const result = await Axios.post('/api/files', formData)
            dispatch({
                type:UPLOAD_FILE_SUCCESS,
                payload: {
                    name: result.data.file,
                    original_name: path
                }
            })
        } catch (error) {
            dispatch({
                type: UPLOAD_FILE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    return (
        <AppContext.Provider
            value={{
                file_msg: state.file_msg,
                name: state.name,
                original_name: state.original_name,
                loading: state.loading,
                showAlert,
                uploadFile
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider