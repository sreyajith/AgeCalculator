import React, { useState } from 'react';
import './style.css';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dobDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  return (
    <div className="container text-center">
      <h1 className="mt-5">Age Calculator</h1>
      <h5>Enter your date of birth</h5>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={{ width: '30%' }} 
        className="form-control mt-2"
      />
      <button onClick={calculateAge} className="btn btn-primary mt-3">Calculate Age</button>
      {age !== null && (
        <h3 className="mt-4">You are {age} years old</h3>
      )}
    </div>
  );
}

export default AgeCalculator;

