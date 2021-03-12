import {CREATE_USER, DELETE_USER} from '../types/user.types'

export const addUser = (user, token)=> (dispatch) => {
  console.log(user, token)
  dispatch({
    type: CREATE_USER,
    payload: {user, token}
  })
}

export const deleteUser = ()=> (dispatch) => {
  dispatch({
    type: DELETE_USER,
    payload: {user:"", token:""}
  })
}