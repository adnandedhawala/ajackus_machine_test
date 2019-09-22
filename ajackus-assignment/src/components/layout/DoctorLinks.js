import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { NavLink } from "react-router-dom";

const DoctorLinks = props => {
  // console.log(props);
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to='/addPatient' >
          <i className="material-icons left">person_add</i>Add Patient
        </NavLink>
      </li>
      <li>
        <a onClick={props.logOut}>
          <i className="material-icons left">lock</i>Logout
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink ">
          Dr
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
)(DoctorLinks);
