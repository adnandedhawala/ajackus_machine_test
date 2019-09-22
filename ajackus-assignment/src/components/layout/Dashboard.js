import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { checkUser, isLogin } from "../../store/helper/authService";
import PatientDashboard from "../patient/PatientDashboard";
import DoctorDashboard from "../doctor/DoctorDashboard";

export class Dashboard extends Component {
  render() {
    if (!isLogin()) return <Redirect to="/login" />;
    else {
      if (checkUser()) return <DoctorDashboard />;
      return <PatientDashboard />;
    }
  }
}

export default Dashboard;
