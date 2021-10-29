import axios from "axios"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./userActionTypes"


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