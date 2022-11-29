import axios from "axios";

const SET_USER = "SET_USER";
const EDIT_USER = "EDIT_USER";
// const DELETE_USER = "DELETE_USER"

const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

const editUser = (user) => {
  return {
    type: EDIT_USER,
    user,
  };
};

// const deleteUser = (user) => {
//     return{
//         type: DELETE_USER,
//         user
//     }
// }

export const fetchUser = (username) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.get(`/api/users/${username}`);
      dispatch(setUser(user));
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchEditedUser = (user, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${user.username}`, user);
      dispatch(editUser(data));
      history.push(`users/${user.username}`);
    } catch (err) {
      console.error(err);
    }
  };
};

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case EDIT_USER:
      return action.user;
    default:
      return state;
  }
}
