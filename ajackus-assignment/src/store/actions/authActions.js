import * as ACTION_TYPES from "./ActionTypes";
import { storeData, clearData } from "../helper/authService";

export const signUp = newUser => {
  let userName =
    newUser.firstName.toUpperCase() + " " + newUser.lastName.toUpperCase();
  let userData = {
    name: userName,
    email: newUser.email,
    password: newUser.password,
    status: newUser.status
  };
  //   console.log(userData);
  return (dispatch, getState) => {
    fetch("http://localhost:4000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(() => {
        dispatch({ type: ACTION_TYPES.REGISTER_SUCCESS });
        window.location.reload();
      })
      .catch(err => {
        dispatch({ type: ACTION_TYPES.REGISTER_ERROR, err });
      });
  };
};

export const signIn = user => {
  //   console.log(user);
  var flag = false;
  return (dispatch, getState) => {
    fetch("http://localhost:4000/user")
      .then(res => res.json())
      .then(response => {
        for (let key in response) {
          if (
            response[key].email == user.email &&
            response[key].password == user.password
          ) {
            storeData(response[key]);
            flag = true;
            dispatch({
              type: ACTION_TYPES.AUTHENTICATION_SUCCESS
            });
            break;
          }
        }
        if (!flag) {
          dispatch({
            type: ACTION_TYPES.AUTHENTICATION_FAILURE,
            err: "Invalid Credentials!"
          });
        } else {
          window.location.reload();
        }
      });
  };
};

export const signOut = () => {
  clearData();
  return dispatch => {
    dispatch({ type: ACTION_TYPES.LOGOUT_SUCCESS });
    // window.location.href = "http://localhost:3000";
    window.location.reload();
  };
};
