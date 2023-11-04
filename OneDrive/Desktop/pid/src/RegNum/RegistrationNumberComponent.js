import React, { useState } from 'react';
import './RegistrationNumberComponent.css';

const RegistrationNumberComponent = () => {
  // Define your array of values
  const values = [
    "A world where shadows have a life of their own.",
    "The last human on Earth receives a message from outer space.",
    "A watch that can turn back time, but only by five minutes.",
    "An ancient tree in a forest that can share the memories it has witnessed.",
    "Every night, a dreamer visits a city that doesn't exist in the waking world.",
    "The moment when the oceans decided to leave the Earth.",
    "A diary found in a haunted mansion that describes the future.",
    "When the world's most famous paintings come to life at midnight.",
    "The first annual convention of imaginary friends.",
    "A forgotten letter in a bottle reaches its destination after 100 years.",
    "In a world where everyone's life soundtrack is audible, one person hears silence.",
    "A train that only stops in towns that have been lost in time.",
    "The mysterious origins of a carnival that appears once every 50 years.",
    "An island where all lost things end up.",
    "The day animals decided to hold a summit to discuss humans."
  ];
  

  // State to store the registration number input
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [displayedValue, setDisplayedValue] = useState(null);

  // Handle changes to the input field
  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Check if the input is not an empty string
    if (inputValue !== '') {
      const inputNumber = parseInt(inputValue);

      // Use the modulo operator to ensure the input wraps around to a valid index
      const index = (inputNumber % values.length + values.length) % values.length;

      // Set the displayed value based on the calculated index
      setRegistrationNumber(inputNumber);
      setDisplayedValue(values[index]);
    } else {
      // If the input is empty, reset the displayed value
      setRegistrationNumber('');
      setDisplayedValue(null);
    }
  };

  return (
    <div className="registration-container">
      <h1>Enter Your Registration Number To Get Your Topic</h1>
      <input
       className="registration-input"
        type="text"
        placeholder="Enter registration number"
        value={registrationNumber}
        onChange={handleInputChange}
      />
      {displayedValue !== null ? (
        <div  className="registration-result">
          <p>Registration Number <b>{registrationNumber}</b>:<br/>Topic: <b>{displayedValue}</b></p>
          <button onClick={() => setRegistrationNumber('')}>Clear the field before entering the registration number again.</button>
        </div>
      ) : (
        <p className="invalid-registration">Invalid Registration Number</p>
      )}
    </div>
  );
};

export default RegistrationNumberComponent;
