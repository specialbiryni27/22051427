import React, { useState } from 'react';

function AverageCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [average, setAverage] = useState(0);

  const handleInputChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleAddNumber = () => {
    if (newNumber !== '') {
      setNumbers([...numbers, parseFloat(newNumber)]);
      setNewNumber('');
    }
  };

  const calculateAverage = () => {
    if (numbers.length > 0) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      setAverage(sum / numbers.length);
    } else {
      setAverage(0);
    }
  };

  return (
    <div>
      <h2>Average Calculator</h2>
      <div>
        <input
          type="number"
          value={newNumber}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <button onClick={handleAddNumber}>Add</button>
      </div>
      <div>
        <button onClick={calculateAverage}>Calculate Average</button>
      </div>
      <div>
        <p>Numbers: {numbers.join(', ')}</p>
        <p>Average: {average}</p>
      </div>
    </div>
  );
}

export default AverageCalculator;