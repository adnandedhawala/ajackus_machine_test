import { FETCH_PATIENT, PATIENT_NOT_FOUND } from "../actions/ActionTypes";

const initState = {
  patientData: {}
};

const patientReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PATIENT:
      return {
        ...state,
        patientData: action.payload
      };
    case PATIENT_NOT_FOUND:
      console.log("no data found");
      return {
        ...state,
        patientData: action.payload
      };
    default:
      return state;
  }
  // return state;
};

export default patientReducer;
