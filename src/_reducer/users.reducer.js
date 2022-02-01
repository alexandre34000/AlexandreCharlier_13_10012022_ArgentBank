import allConstantes from '../_constants'

const userState = {
  currentUser: {}
}

const usersReducer = (state = userState, action) => {
  switch (action.type) {
    case allConstantes.userConstantes.PROFIL_REQUEST:
      return {
        ...state,
        currentUser: action.payload
      }
    case allConstantes.userConstantes.PROFIL_UPDATED:
      return {
        ...state,
        currentUser: action.payload
      }
    default: return state
  }
}

export default usersReducer

