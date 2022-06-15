import axios from 'axios'
import actiontypes from '../actiontypes'
import jwt_decode  from 'jwt-decode'


export const registerUser = (user) => {

    return dispatch => {
        dispatch(loading())
        axios.post('http://localhost:5050/api/users/register', user)
            .then(res => {
               if(res.status === 201){
                   dispatch(authSuccess(res.data.token, res.data.user._id))
                }
            })
            .catch(err => dispatch(authFailure(err.message)))
        }
    }
    
    export const loginUser = (user) => {
        
        return dispatch => {
            dispatch(loading())
            axios.post('http://localhost:5050/api/users/login', user)
            .then (res => {
            dispatch(authSuccess(res.data.token, res.data.user._id, res.data.user.admin))
        
        })
        .catch(err => dispatch(authFailure(err.message)))
    }
}

export const logoutUser = () => {
    
    return {
        type: actiontypes().auth.logout
    }
}

export const checkUser = () => {
    
    return dispatch => {
        let token = localStorage.getItem('token')

        if(token) {
            dispatch(authSuccess(token))
        } else {
            localStorage.removeItem('token')
        }
        
        if(token) {
            if(jwt_decode(token).exp * 1000 > Date.now()) {
                dispatch(authSuccess(token))
            } else {
                localStorage.removeItem('token')
            }
        }
    }

}




const loading = () => {
    return {
        type: actiontypes().auth.loading
    }
}

const authFailure = (err) => {
    return {
        type: actiontypes().auth.authFailure,
        payload: err
    }
}

const authSuccess = (token, userId, admin )=> {
    return {
        type: actiontypes().auth.authSuccess,
        payload: token,
        userId: userId,
        admin: admin
    }
}