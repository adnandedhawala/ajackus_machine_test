import authReducer from "./authReducer";
import doctorReducer from "./doctorReducer";
import patientReducer from "./patientReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  doctor: doctorReducer,
  patient:patientReducer
});

export default rootReducer;
