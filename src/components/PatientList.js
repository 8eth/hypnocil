import React from "react"
import Patient from "./Patient"

function PatientList({patients, handleDelete}) {
  return(
      <table>
          <tbody>
            <tr>
                <th></th>
                <th>Status</th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Noted Side Effects</th>
            </tr>
            {patients.map((patient) => (
              <Patient 
                key={patient.id} 
                patient={patient}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
      </table>  
    );
}

export default PatientList;