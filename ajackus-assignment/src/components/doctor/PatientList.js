import React from "react";
import PatientSummary from "./PatientSummary";
import { connect } from "react-redux";
import { fetchPatientList } from "../../store/actions/doctorActions";
import { getDoctorId } from "../../store/helper/doctorService";

const PatientList = props => {
  let doctorId = getDoctorId();
  props.fetchList(doctorId);
  // console.log(props);
  if (props.patientList.length == 0)
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
        <h4 className="header center grey-text">Patient List</h4>
        <ul className="collection">
          {props.patientList.map(patientData => {
            return (
              <PatientSummary patientData={patientData} key={patientData.id} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    patientList: state.doctor.patientList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchList: id => dispatch(fetchPatientList(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientList);
