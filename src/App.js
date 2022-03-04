import React, {useState, useEffect} from "react"
import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

function App() {
  const [patients, setPatients] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/patients')
    .then(res => res.json())
    .then(setPatients)
  }, [])

  const filteredPatient = patients.filter((patient) => (patient.name.toLowerCase().includes(searchTerm.toLowerCase())))

  function handleDelete(patient) {
    // fetch(`http://localhost:3000/patients/${patient.id}`, {method: 'DELETE'})
    const newPatientList = patients.filter((patientItem) => (patientItem !== patient))
    setPatients(newPatientList)
  }

  function addNewPatient(newPatient) {
    setPatients([...patients, newPatient])
  }

  return (
    <div className="root">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="content">
        <NewPatientForm 
          addNewPatient={addNewPatient}
        />
        <PatientList 
          patients={filteredPatient} 
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
