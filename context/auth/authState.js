import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
    SUCCESSFUL_REGISTRATION,
    ERROR_REGISTRATION,
    CLEAR_ALERTS, 
    USER_AUTHENTICATED,
    SUCCESSFUL_LOGIN,
    ERROR_LOGIN,
    LOG_OUT } from '../../types';
import Axios from '../../config/axios';
import authToken from '../../config/auth';

const AuthContextProvider = ({children}) => {

    const initialState = {
        token:typeof window !== 'undefined' ? localStorage.getItem('reactnodesendtoken'): null,
        authenticated: null,
        user: null,
        msg: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const clearAlerts = () => {
        setTimeout(() => {
            dispatch({
                type:CLEAR_ALERTS
            })
        }, 3000)
    }

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

        clearAlerts();
    }

    const loginUser = async data => {
        try {
            const response = await Axios.post('/api/auth', data);
            console.log(response.data.token);
            dispatch({
                type: SUCCESSFUL_LOGIN,
                payload:response.data.token
            })
        } catch (error) {
            dispatch({
                type: ERROR_LOGIN,
                payload:error.response.data.msg
            })
        }

        clearAlerts();
    }

    const userAuthenticated = async () => {
        const token = localStorage.getItem('reactnodesendtoken');
        if (token) {
            authToken(token);
        }

        try {
            const response = await Axios.get('/api/auth');
            dispatch({
                type: USER_AUTHENTICATED,
                payload: response.data.user
            })
        } catch (error) {
            dispatch({
                type: ERROR_LOGIN,
                payload:error.response.data.msg
            })
        }
    }

    const logOut = () => {
        dispatch({
            type: LOG_OUT
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
                loginUser,
                userAuthenticated,
                logOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider