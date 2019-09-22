import * as ACTION_TYPES from "./ActionTypes";
import { getDoctorId } from "../helper/doctorService";

export const addPatient = newUser => {
  let userName =
    newUser.firstName.toUpperCase() + " " + newUser.lastName.toUpperCase();
  let userData = {
    name: userName,
    age: newUser.age,
    gender: newUser.gender,
    medicines: newUser.medicines,
    dob: newUser.dob,
    address: newUser.address,
    symptoms: newUser.symptoms,
    date_last_visited: newUser.date_last_visited,
    doctor_id: getDoctorId()
  };
  // console.log(userData);
  return (dispatch, getState) => {
    fetch("http://localhost:4000/patient_details", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(() => {
        dispatch({ type: ACTION_TYPES.PATIENT_ADDED });
        window.location.reload();
      })
      .catch(err => {
        dispatch({ type: ACTION_TYPES.PATIENT_ADDED_ERROR, err });
      });
    // dispatch({ type: ACTION_TYPES.PATIENT_ADDED });
  };
};

export const fetchPatientList = doctorId => {
  return dispatch => {
    let flag = false;
    fetch("http://localhost:4000/patient_details")
      .then(res => res.json())
      .then(response => {
        let listData = response.filter((value) => {
          return value.doctor_id == doctorId;
        });
        dispatch({
          type: ACTION_TYPES.FETCH_PATIENT_LIST,
          data: listData
        });
      });
  };
};
