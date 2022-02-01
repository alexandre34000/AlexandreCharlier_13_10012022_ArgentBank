/**
 * Check the the authentification
 * @param {<object>} login {email: string, password: string}
 * @returns Promise <object> { status: integer,
 *                             message: string,
 *                             body: {token: string}                         
 */
const loginRequest = (login) => {

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(login)
    }

    return fetch(`http://localhost:3001/api/v1/user/login`, requestOptions)
        .then(res => res.json())
        .catch((error) => {
            console.error('Error:', error.message);
        });     
}

const logoutRequest = () => {
    localStorage.clear();
}

const loginService = {
    loginRequest,
    logoutRequest
}
export default loginService
