import { 
    REGISTER_SUCCESS,
     REGISTER_FAIL,
      USER_LOADED,
       AUTH_ERROR,
       LOGIN_FAIL,
       LOGIN_SUCCESS,
       LOGIN_OUT,
       ACCOUNT_DELETE,
       ADMIN_LOADED,
       LAWYER_LOADED,
       DELETE_ERROR
    } from '../actions/types';

const initalState= {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    admin:null,
    lawyer:null,
    error:{}
};

export default function(state = initalState, action) {

const { type, payload } = action;

    switch (type) {
        case LAWYER_LOADED:
                return {
                    ...state,
                    isAuthenticated:true,
                    loading: false,
                    lawyer: payload
                }
        case ADMIN_LOADED:
                return {
                    ...state,
                    isAuthenticated:true,
                    loading: false,
                    admin: payload
                }
        case USER_LOADED:
                return {
                    ...state,
                    isAuthenticated:true,
                    loading: false,
                    //user: payload
                }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated:true,
                loading: false
            }
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGIN_OUT:
        case ACCOUNT_DELETE:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated:false,
                loading: false
            }
        case DELETE_ERROR:
                return {
                    ...state,
                    error: payload,
                    loading: false
                }
        default:
            return state;
    }
}