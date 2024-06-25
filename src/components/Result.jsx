import React from 'react';

const Result = ({ score, totalQuestions }) => (
  <div>
    <h2>Your Result</h2>
    <p>
      You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong>.
    </p>
    <p>
      Percentage: <strong>{(score / totalQuestions * 100).toFixed(2)}%</strong>
    </p>
  </div>
);

export default Result;