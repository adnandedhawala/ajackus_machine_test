import {
  PATIENT_ADDED,
  PATIENT_ADDED_ERROR,
  FETCH_PATIENT_LIST
} from "../actions/ActionTypes";

const initState = {
  dataError: null,
  patientList: []
};

const doctorReducer = (state = initState, action) => {
  switch (action.type) {
    case PATIENT_ADDED:
      alert("Patient Added Successfully!");
      return {
        ...state,
        dataError: null
      };
    case PATIENT_ADDED_ERROR:
      console.log("Error in uploading data");
      return {
        ...state,
        dataError: action.err
      };
    case FETCH_PATIENT_LIST:
      return {
        ...state,
        patientList: action.data
      };
    default:
      return state;
  }
  // return state;
};

export default doctorReducer;
