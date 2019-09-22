import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { isLogin } from "../../store/helper/authService";

export class Register extends Component {
  state = {
    email: "",
    password: "",
    confirm_password: "",
    firstName: "",
    lastName: "",
    status: "",
    error_message: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // this.props.signUp(this.state);
    if (this.vaildateForm()) {
      // console.log(this.state);
      this.props.signUp(this.state);
      // window.location.href = "http://localhost:3000/login";
    }
  };

  vaildateForm = () => {
    if (
      this.state.firstName == "" ||
      this.state.lastName == "" ||
      this.state.password == "" ||
      this.state.confirm_password == "" ||
      this.state.status == "" ||
      this.state.email == ""
    ) {
      this.setState({
        error_message: "Please fill all fields!"
      });
      return false;
    } else if (this.state.password != this.state.confirm_password) {
      this.setState({
        error_message: "Confirm password should be same as Password!"
      });
      return false;
    } else {
      this.setState({
        error_message: ""
      });
      return true;
    }
  };
  render() {
    if (isLogin()) return <Redirect to="/" />;
    return (
      <div className="container">
        <div className="row">
          <form className="white" onSubmit={this.handleSubmit}>
            <h4 className="grey-text text-darken-3 center">Register Form</h4>

            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <p className="grey-text">Who Are you ?</p>
              <div>
                <label>
                  <input
                    name="status"
                    id="status"
                    type="radio"
                    value="doctor"
                    onChange={this.handleChange}
                  />
                  <span>Doctor</span>
                </label>
                <label style={{ marginLeft: "10px" }}>
                  <input
                    name="status"
                    id="status"
                    type="radio"
                    value="patient"
                    onChange={this.handleChange}
                  />
                  <span>Patient</span>
                </label>
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
              <div className="center red-text">{this.state.error_message}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: userData => dispatch(signUp(userData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
