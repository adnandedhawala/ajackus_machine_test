import React from "react";
import {NavLink} from 'react-router-dom';


const SignOutLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to = '/register'>
          <i className="material-icons left">person_add</i>Register
        </NavLink>
      </li>
      <li>
        <NavLink to='login'>
          <i className="material-icons left">vpn_key</i>Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignOutLinks;
