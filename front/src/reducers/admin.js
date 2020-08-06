import { GET_USERS,USERS_ERROR, LAWYERS_REGISTER_FAIL, LAWYERS_REGISTER_SUCCESS, ADMIN_DELETE_USER,ADMIN_DELETE_LAWYER } from "../actions/types";

const initalState = {
  /*  token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    admin:null */
    error:{},
  user: null,
  users: [],
  loading: true,
};

export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
      case USERS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
     case LAWYERS_REGISTER_SUCCESS:
                return {
                    ...state,
                }
     case ADMIN_DELETE_USER:
                return {
                    ...state,
                    users: state.users.filter(user => user._id !== payload),

                }
        /* case REGISTER_SUCCESS:
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
            }  */
    default:
      return state;
  }
}
