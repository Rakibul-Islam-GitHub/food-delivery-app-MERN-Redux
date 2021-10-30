import axios from "axios"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "./userActionTypes"


export const login= (email, password) => async(dispatch)=> {
    try {
        dispatch({
            type: LOGIN_REQUEST,
 
        })
        const headers= {
            "Content-type" : "application/json"
        }
        const {data} = await axios.post('/api/user/login', {email, password}, headers)
        localStorage.setItem('userInfo', JSON.stringify(data))
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        
        
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}

export const logout= ()=> async (dispatch)=>{
    await localStorage.removeItem('userInfo');
    dispatch({
        type: 'LOGOUT',
        payload: {}

    })
}


export const register= (name,email, password) => async(dispatch)=> {
    try {
        dispatch({
            type: REGISTER_REQUEST,
 
        })
        const headers= {
            "Content-type" : "application/json"
        }
        const {data} = await axios.post('/api/user', {name,email, password}, headers)
        console.log(data)
        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
        
        
        
    } catch (error) {
        dispatch({
            type:REGISTER_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}