import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
    SUCCESSFUL_REGISTRATION,
    ERROR_REGISTRATION,
    CLEAR_ALERTS, 
    USER_AUTHENTICATED } from '../../types';
import Axios from '../../config/axios';

const AuthContextProvider = ({children}) => {

    const initialState = {
        token:'',
        authenticated: null,
        user: null,
        msg: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const registerUser = async (data) => {
        try {
            const response = await Axios.post('/api/users', data);
            dispatch({
                type: SUCCESSFUL_REGISTRATION,
                payload: response.data.msg
            })
        } catch (error) {
            dispatch({
                type: ERROR_REGISTRATION,
                payload: error.response.data.msg
            })
        }

        setTimeout(() => {
            dispatch({
                type:CLEAR_ALERTS
            })
        }, 3000)
    }

    const authenticateUser = username => {
        dispatch({
            type: USER_AUTHENTICATED,
            payload: username
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                msg: state.msg,
                registerUser,
                authenticateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider