import allHelpers from '../_helpers'

/**
 * Get user profil with jwt 
 * @returns Promise <object> {  status: integer, 
 *                              message; string,
 *                              body:{ createdAt, upadteAt,email, firstname, lastname, id}}
 */
const recoverUserProfil = () => {
    const requestOptions = {
        method: 'POST',
        headers: allHelpers.authHeader()
    };

    return fetch(`http://localhost:3001/api/v1/user/profile`, requestOptions)
        .then(res => res.json())
        .catch((error) => {
            console.error('Error:', error.message);
        });
}

/**
 * 
 * @param {<Object>} user {firstName: string, lastName; string}
 * @returns Promise
 */
const updateUserProfil = (user) => {
    const requestOptions = {
        method: 'PUT',
        headers: allHelpers.authHeader(),
        body: JSON.stringify(user)
    };

    return fetch(`http://localhost:3001/api/v1/user/profile`, requestOptions)
        .then(res => res.json())

}

const userService = {
    recoverUserProfil,
    updateUserProfil
}
export default userService