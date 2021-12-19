import React, {useState} from 'react';
import Form from './Components/Form';
import './App.css';

function App() {
  
  //Create State Variables
  //to hold Team Members
  const [members, setMembers] = useState([]);
  //and Form values
  const [values, setValues] = useState({
    name:  '', 
    email: '',
    role:  '',
  });

  //create update & submit functions
  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({
      name:  '', 
      email: '',
      role:  '',
    });
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value});
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            {member.email}, {member.name}, {member.role},
            
            </div>
        )
      })}
    </div>
  );
}

export default App;
