import React from 'react'

function Patient({patient, handleDelete}) {
  let effectString = '';
  patient.side_effects.forEach((sideEffect, index) => {
      effectString += sideEffect;
      if (index != (patient.side_effects.length - 1)) {
          effectString += ", ";
      }
  });
  
  return (
    <tr>
        <th><button onClick={() => handleDelete(patient)}>Delete</button></th>
        <th>{patient.deceased ? 'Deceased' : 'Alive'}</th>
        <th>{patient.id}</th>
        <th>{patient.name}</th>
        <th>{effectString}</th>
    </tr>
  )
}

export default Patient