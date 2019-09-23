import {
  PATIENT_ADDED,
  PATIENT_ADDED_ERROR,
  FETCH_PATIENT_LIST,
  DELETE_PATIENT_SUCCESS,
  UPDATE_PATIENT
} from "../actions/ActionTypes";

const initState = {
  dataError: null,
  patientList: []
  // patientItem: {}
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
    case DELETE_PATIENT_SUCCESS:
      alert("Patient Deleted Successfully!");
      return {
        ...state
        // patientList: action.data
      };
    case UPDATE_PATIENT:
      alert("Patient Updated Successfully!");
      return {
        ...state
        // patientList: action.data
      };
    default:
      return state;
  }
  // return state;
};

export default doctorReducer;
