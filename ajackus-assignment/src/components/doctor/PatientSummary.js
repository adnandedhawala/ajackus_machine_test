import React from "react";

const PatientSummary = props => {
  // console.log(props)
  return (
    <li className="collection-item ">
      <div className="card">
        <div className="card-content">
          <a className="text-darken-3 grey-text">
            <h4 className="card-title center">
              {props.patientData.name}
            </h4>
          </a>
          <div>
            <h6>Symptoms</h6>
            <p>{props.patientData.symptoms}</p>
          </div>
        </div>
        <div className="card-action center">
          <a className="pink-text">Gender :{props.patientData.gender}</a>
          <a className="pink-text">Age :{props.patientData.age}</a>
          <a className="pink-text">
            last visited on :{props.patientData.date_last_visited}
          </a>
        </div>
        <div className="card-action center">
          <button className="pink btn">Update</button>
          <button className="pink btn" style={{ marginLeft: "2%" }}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default PatientSummary;
