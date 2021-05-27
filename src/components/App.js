import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import './app.css';

const App = () => {
  const [calculator, setCalculator] = useState({ total: null, next: null, operation: null });

  const handleClick = (buttonName) => {
    const newCalculator = calculate(calculator, buttonName);
    setCalculator(newCalculator);
  };

  const { total, next } = calculator;

  return (
    <div className="d-lg-flex justify-content-evenly">
      <div className="fs-2 mb-4">Let&apos;s do some math !</div>
      <div className="d-flex">
        <div className="app">
          <Display result={next ?? total ?? undefined} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
