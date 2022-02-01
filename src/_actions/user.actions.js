import allConstantes from '../_constants';
import allServices from '../_services';

const profilUser = (userObj) => ({
  type: allConstantes.userConstantes.PROFIL_REQUEST,
  payload: userObj
})

const updateUser =(userObj) =>({
  type: allConstantes.userConstantes.PROFIL_UPDATED,
  payload: userObj
})

/**
 * Recovery of the registered user's profile
 * @returns Promise
 */
const getProfileFetch = () => dispatch => {
  allServices.userService.recoverUserProfil()
    .then(data => {
      if (data.message) {
        dispatch(profilUser(data.body))
      }
    })
    .catch((err) => { console.log(err) })
}

/**
 *  Update of the user's profile
 * @param {<Object>} userInfo {firstName:, lastName:}
 * @returns Promise
 */
const updateProfil = (userInfo) => dispatch => {
  allServices.userService.updateUserProfil(userInfo)
    .then(data => {
      if (data.message) {
        dispatch(updateUser(data.body))
      } 
    })
    .catch((err) => { console.log(err) })
}

const exportFunction = {
  getProfileFetch,
  updateProfil
}
export default exportFunction;
