import React, { useState } from 'react';

const AustralianFinancialSolver = () => {
  const [inputData, setInputData] = useState({
    principal: 0,
    interestRate: 0,
    loanTerm: 0,
  });
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const calculatedResult = calculateMonthlyPayment(inputData);
    setResult(calculatedResult);
  };

  return (
    <div>
      <h1>Australian Financial Solver</h1>
      <label>
        Principal:
        <input
          type="number"
          value={inputData.principal}
          onChange={(e) =>
            setInputData({ ...inputData, principal: parseFloat(e.target.value) })
          }
        />
      </label>
      <label>
        Interest Rate (%):
        <input
          type="number"
          value={inputData.interestRate}
          onChange={(e) =>
            setInputData({ ...inputData, interestRate: parseFloat(e.target.value) })
          }
        />
      </label>
      <label>
        Loan Term (years):
        <input
          type="number"
          value={inputData.loanTerm}
          onChange={(e) =>
            setInputData({ ...inputData, loanTerm: parseInt(e.target.value) })
          }
        />
      </label>
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

const calculateMonthlyPayment = ({ principal, interestRate, loanTerm }) => {
  // Convert annual interest rate to monthly
  const monthlyInterestRate = interestRate / 12 / 100;

  // Convert loan term to months
  const loanTermMonths = loanTerm * 12;

  // Calculate monthly payment using the formula for a fixed-rate mortgage
  const monthlyPayment =
    (principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));

  return `Your monthly payment: $${monthlyPayment.toFixed(2)}`;
};

export default AustralianFinancialSolver;
