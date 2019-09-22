import React from "react";
import DoctorLinks from "./DoctorLinks";
import PatientLinks from "./PatientLinks";
import { checkUser } from "../../store/helper/authService";

const SignInLinks = () => {
  if (!checkUser()) {
    var links = <PatientLinks />;
  } else {
    links = <DoctorLinks />;
  }
  return <div>{links}</div>;
};

export default SignInLinks;
