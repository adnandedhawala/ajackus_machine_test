import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect}from 'react-router-dom'
import { addPatient } from "../../store/actions/doctorActions";
import { checkUser } from "../../store/helper/authService";

export class AddPatient extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    dob: "",
    address: "",
    medicines: "",
    symptoms: "",
    date_last_visited: "",
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
      //   console.log(this.state);
      this.props.addPatient(this.state);
    }
  };

  vaildateForm = () => {
    if (
      this.state.firstName == "" ||
      this.state.lastName == "" ||
      this.state.age == "" ||
      this.state.gender == "" ||
      this.state.medicines == "" ||
      this.state.address == "" ||
      this.state.symptoms == "" ||
      this.state.date_last_visited == "" ||
      this.state.dob == ""
    ) {
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
    if (!checkUser()) return <Redirect to="/" />;
    return (
      <div className="container">
        <div className="row">
          <form className="white" onSubmit={this.handleSubmit}>
            <h4 className="grey-text text-darken-3 center">Add Patient</h4>

            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <p className="grey-text">Address</p>
              <textarea id="address" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                min="1"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <p className="grey-text">Select Your Gender</p>
              <div>
                <label>
                  <input
                    name="gender"
                    id="gender"
                    type="radio"
                    value="male"
                    onChange={this.handleChange}
                  />
                  <span>Male</span>
                </label>
                <label style={{ marginLeft: "10px" }}>
                  <input
                    name="gender"
                    id="gender"
                    type="radio"
                    value="female"
                    onChange={this.handleChange}
                  />
                  <span>Female</span>
                </label>
              </div>
            </div>

            <div className="input-field">
              <p className="grey-text" style={{ margin: 0 }}>
                Date Of Birth
              </p>
              <input type="date" id="dob" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <p className="grey-text">Symptoms</p>
              <textarea id="symptoms" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <p className="grey-text">Medicines</p>
              <textarea id="medicines" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <p className="grey-text" style={{ margin: 0 }}>
                Last visited On
              </p>
              <input
                type="date"
                id="date_last_visited"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">
                Add Patient
              </button>
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
    addPatient: userData => dispatch(addPatient(userData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddPatient);



//use default value