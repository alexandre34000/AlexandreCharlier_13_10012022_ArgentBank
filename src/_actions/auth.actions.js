import constants from '../_constants';
import allServices from '../_services'

const loginSucces = (userConnect) => ({
    type: constants.loginConstantes.LOGIN_SUCCES,
    payload: userConnect
})

const loginError =(userConnect) =>({
    type : constants.loginConstantes.LOGIN_ERROR,
    payload: userConnect
})

const loginErrorServer =()=>({
    type: constants.loginConstantes.LOGIN_ERROR_SERVER
})

const logout = () => ({
    type: constants.loginConstantes.LOGOUT_REQUEST
})

/**
 * Closes the user's session, deletes the JWT inside localStorage
 * @void
 */
const logoutUser = () => dispatch => {
    allServices.loginService.logoutRequest();
    dispatch(logout());
}

/**
 * Authentication of the user, retrieval of a JWT and recording in localStorage
 * @param {<object>} userLogin  {email: string, password: string}
 * 
*/
const loginUser = (userLogin) => dispatch => {
    allServices.loginService.loginRequest(userLogin)
        .then(data => {
            if (data) {
                if (data.body) {
                    localStorage.setItem("token", data.body.token);
                    dispatch(loginSucces(data))
                }
                dispatch(loginError(data))  
            }else{
                dispatch(loginErrorServer())
            }
        })
}

const exportFunction = {
    logoutUser,
    loginUser
}
export default exportFunction

