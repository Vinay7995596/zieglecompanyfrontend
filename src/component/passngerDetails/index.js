import React, { useState } from 'react';

const PassengerDetails = ({ location }) => {
  const [passengers, setPassengers] = useState([]);
  const { count } = location.state; // Accessing count from location state

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = { ...updatedPassengers[index], [name]: value };
    setPassengers(updatedPassengers);
  };

  const renderPassengerForms = () => {
    const forms = [];
    for (let i = 0; i < count; i++) {
      forms.push(
        <div key={i}>
          <h3>Passenger {i + 1}</h3>
          <input type="text" name={`name${i}`} placeholder="Name" onChange={(e) => handleChange(i, e)} />
          <input type="text" name={`age${i}`} placeholder="Age" onChange={(e) => handleChange(i, e)} />
        </div>
      );
    }
    return forms;
  };

  return (
    <div>
      <h2>Passenger Details</h2>
      {renderPassengerForms()}
    </div>
  );
};

export default PassengerDetails;
