import allConstantes from '../_constants';

const authState = {
  isLogged: false,
  currentInfoLog: {}
}

export default function authReducer(state = authState, action) {
  switch (action.type) {
    case allConstantes.loginConstantes.LOGIN_SUCCES:
      return {
        ...state,
        isLogged: true,
        currentInfoLog: action.payload
      }
      case allConstantes.loginConstantes.LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        currentInfoLog: action.payload
      }
      case allConstantes.loginConstantes.LOGIN_ERROR_SERVER:
        return {
          ...state,
          isLogged: false,
          currentInfoLog: {message:"Error Server, try more later"}
        }
    case allConstantes.loginConstantes.LOGOUT_REQUEST:
      return {
        ...state,
        isLogged: false,
        currentInfoLog: {}
      }
    default:
      return state
  }
}
