import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import Login from "./components/forms/Login"
import Register from "./components/forms/Register"
import AddPatient from "./components/forms/AddPatient"


const user_status = () => {
  // localStorage.setItem("status", "d");
  localStorage.setItem("authStatus", "active");
  localStorage.removeItem("authStatus");
};
user_status();
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component = {Dashboard}></Route>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/addPatient' component={AddPatient} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
