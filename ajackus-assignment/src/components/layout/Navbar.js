import React from "react";
import { NavLink } from "react-router-dom";

import SignOutLinks from "./SignOutLinks";
import SignInLinks from "./SignInLinks";
import {isLogin}from '../../store/helper/authService'


const Navbar = () => {
  if (isLogin()) {
    var links = <SignInLinks />;
  } else {
    links = <SignOutLinks />;
  }
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo" style={{paddingLeft:"30px"}}>
            Machine Test
          </NavLink>
          {links}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
