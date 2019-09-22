import * as ACTION_TYPES from "./ActionTypes";
import { getPatientName } from "../helper/patientService";

export const fetchPatient = id => {
  return dispatch => {
    let userName = getPatientName();
    let flag = false;
    fetch("http://localhost:4000/patient_details")
      .then(res => res.json())
      .then(response => {
        // console.log(response[0])
        for (let key in response) {
          if (response[key].name === userName) {
            dispatch({
              type: ACTION_TYPES.FETCH_PATIENT,
              payload: response[key]
            });
            flag = true;
            break;
          }
        }
        if (!flag) {
          dispatch({
            type: ACTION_TYPES.PATIENT_NOT_FOUND,
            payload: ""
          });
        }
      });
  };
};
