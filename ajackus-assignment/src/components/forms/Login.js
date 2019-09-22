import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { isLogin } from "../../store/helper/authService";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    error_message: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.vaildateForm()) {
      // console.log(this.state);
      this.props.signIn(this.state);
    }
  };

  vaildateForm = () => {
    if (this.state.password == "" || this.state.email == "") {
      this.setState({
        error_message: "Please fill all fields!"
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
    // console.log(this.props);
    if (isLogin()) return <Redirect to="/" />;
    return (
      <div className="container">
        <div className="row">
          <form className="white" onSubmit={this.handleSubmit}>
            <h4 className="grey-text text-darken-3 center">Login Form</h4>
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
              <button className="btn pink lighten-1 z-depth-0">Login</button>
              <div className="center red-text">{this.state.error_message}</div>
              <div className="center red-text">{this.props.authError}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: cred => dispatch(signIn(cred))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
