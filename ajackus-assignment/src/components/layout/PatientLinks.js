import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { NavLink } from "react-router-dom";

const PatientLinks = props => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <a onClick={props.logOut}>
          <i className="material-icons left">lock</i>Logout
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating ">
          P
        </NavLink>
      </li>
    </ul>
  );
};
const dispatchMapToProps = dispatch => {
  return {
    logOut: () => dispatch(signOut())
  };
};
export default connect(
  null,
  dispatchMapToProps
)(PatientLinks);
