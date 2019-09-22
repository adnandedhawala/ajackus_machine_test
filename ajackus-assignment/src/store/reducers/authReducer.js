import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  LOGOUT_SUCCESS
} from "../actions/ActionTypes";

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      alert("User Registered Successfully!");
      return {
        ...state,
        authError: null
      };
    case REGISTER_ERROR:
      console.log("Error in Registeration");
      return {
        ...state,
        authError: action.err
      };
    case AUTHENTICATION_SUCCESS:
      console.log("Login Successful!");
      return {
        ...state,
        authError: null
      };
    case AUTHENTICATION_FAILURE:
      console.log("Login Failed");
      return {
        ...state,
        authError: action.err
      };
    case LOGOUT_SUCCESS:
      console.log("Logout Successful");
      return state;
    default:
      return state;
  }
  // return state;
};

export default authReducer;
