import React, { useState } from 'react';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import questions from './questions';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button onClick={toggleMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <QuestionBox
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
          question={questions[currentQuestion]}
        />
      )}
    </div>
  );
};

export default App;