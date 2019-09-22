import React from "react";
import { connect } from "react-redux";
import { fetchPatient } from "../../store/actions/patientAction";
import { getPatientId } from "../../store/helper/patientService";

const PatientDetails = props => {
  let user_id = getPatientId();
  props.fetchPatient(user_id);
  //   console.log(props);
  if (props.patientData === "")
    return (
      <div className="container">
        <div className="row">
            <h4 className="red-text">404 No data Found !</h4>
        </div>
      </div>
    );
  return (
    <div className="container">
      <div className="row">
        <h4 className="header center grey-text">Patient Details</h4>
        <div className="card center">
          <div className="card-content">
            <h4 className="card-title text-darken-3">
              {props.patientData.name}
            </h4>
            <div
              style={{
                borderBottom: "1px solid",
                borderBottomColor: "#ddd",
                paddingBottom: "3%"
              }}
            >
              <h6>Address</h6>
              <p>{props.patientData.address}</p>
            </div>
            <div
              style={{
                borderBottom: "1px solid",
                borderBottomColor: "#ddd",
                marginTop: "3%",
                paddingBottom: "3%"
              }}
            >
              <h6>Symptoms</h6>
              <p>{props.patientData.symptoms}</p>
            </div>
            <div>
              <h6>Medicines</h6>
              <p>{props.patientData.medicines}</p>
            </div>
          </div>
          <div className="card-action ">
            <a className="pink-text">Gender : {props.patientData.gender}</a>
            <a className="pink-text">Age : {props.patientData.age}</a>
          </div>
          <div className="card-action">
            <a className="pink-text">
              last visited doctor on :- {props.patientData.date_last_visited}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    patientData: state.patient.patientData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPatient: id => dispatch(fetchPatient(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientDetails);
