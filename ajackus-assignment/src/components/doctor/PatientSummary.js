import { connect } from "react-redux";
import { deletePatient,updatePatient } from "../../store/actions/doctorActions";

import React, { Component } from "react";

export class PatientSummary extends Component {
  state = {
    showEditForm: false,
    name:this.props.patientData.name,
    age: this.props.patientData.age,
    gender: this.props.patientData.gender,
    dob: this.props.patientData.dob,
    address: this.props.patientData.address,
    medicines: this.props.patientData.message,
    symptoms: this.props.patientData.symptoms,
    date_last_visited: this.props.patientData.date_last_visited,
    error_message: ""
  };
  showEditForm = e => {
    this.setState({ showEditForm: true });
  };
  hideForm = e => {
    this.setState({ showEditForm: false });
  };
  handleDelete = e => {
    this.props.deletePatient(e.target.id);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.vaildateForm()){
        // console.log(this.state)
        // console.log("ready to update");
        this.props.updatePatient(this.props.patientData.id,this.state)
    }
  };
  vaildateForm = () => {
    if (
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
    // console.log(this.props);
    if (this.state.showEditForm)
      return (
        <li className="collection-item ">
          <div className="card">
            <div className="card-content">
              <form className="white" onSubmit={this.handleSubmit}>
                <h4 className="grey-text text-darken-3 center">
                  {this.props.patientData.name}
                </h4>

                <div className="input-field">
                  <p className="grey-text">Address</p>
                  <textarea
                    id="address"
                    defaultValue={this.props.patientData.address}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="age">Age</label>
                  <input
                    defaultValue={this.props.patientData.age}
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
                  <input
                    type="date"
                    id="dob"
                    defaultValue={this.props.patientData.dob}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-field">
                  <p className="grey-text">Symptoms</p>
                  <textarea
                    id="symptoms"
                    defaultValue={this.props.patientData.symptoms}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <p className="grey-text">Medicines</p>
                  <textarea
                    id="medicines"
                    defaultValue={this.props.patientData.medicines}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <p className="grey-text" style={{ margin: 0 }}>
                    Last visited On
                  </p>
                  <input
                    defaultValue={this.props.patientData.date_last_visited}
                    type="date"
                    id="date_last_visited"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-field center">
                  <button className="btn pink lighten-1 z-depth-0">
                    Update Details
                  </button>
                  <div className="center red-text">
                    {this.state.error_message}
                  </div>
                </div>
              </form>
            </div>
            <div className="card-action center">
              <button
                type="button"
                className="pink btn"
                id={this.props.patientData.id}
                onClick={this.hideForm}
              >
                Hide Form
              </button>
            </div>
          </div>
        </li>
      );
    return (
      <li className="collection-item ">
        <div className="card">
          <div className="card-content">
            <h4 className="card-title text-darken-3 center">
              {this.props.patientData.name}
            </h4>
            <div>
              <h6>Address</h6>
              <p>{this.props.patientData.address}</p>
            </div>
            <div>
              <h6>Symptoms</h6>
              <p>{this.props.patientData.symptoms}</p>
            </div>
            <div>
              <h6>Medicenes</h6>
              <p>{this.props.patientData.medicines}</p>
            </div>
          </div>
          <div className="card-action center">
            <a className="pink-text">Gender :{this.props.patientData.gender}</a>
            <a className="pink-text">Age :{this.props.patientData.age}</a>
            <a className="pink-text">
              last visited on :{this.props.patientData.date_last_visited}
            </a>
          </div>
          <div className="card-action center">
            <button
              type="button"
              className="pink btn"
              id={this.props.patientData.id}
              onClick={this.showEditForm}
            >
              Edit Data
            </button>
            <button
              className="pink btn"
              style={{ marginLeft: "2%" }}
              id={this.props.patientData.id}
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  }
}
const mapStateToProps = state => {
  return {
    patientList: state.doctor.patientItem
  };
};
const dispatchMapToProps = dispatch => {
  return {
    deletePatient: id => dispatch(deletePatient(id)),
    updatePatient: (id,user) => dispatch(updatePatient(id,user))
  };
};

export default connect(
  mapStateToProps,
  dispatchMapToProps
)(PatientSummary);
