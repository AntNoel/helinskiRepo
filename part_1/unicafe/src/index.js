import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};
const Statistic = ({ text, value }) => {
  return (
    <>
      <td> {text}</td>
      <td> {value}</td>
    </>
  );
};
const Statistics = ({ good, neutral, bad, total }) => {
  const calcAverage = () => {
    const average = (good * 1 + bad * -1) / total;
    return average;
  };

  return (
    <div>
      <h1>Statistics</h1>
      {!total ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <Statistic text='good' value={good} />
            </tr>
            <tr>
              <Statistic text='neutral' value={neutral} />
            </tr>
            <tr>
              <Statistic text='bad' value={bad} />
            </tr>
            <tr>
              <Statistic text='total' value={total} />
            </tr>
            <tr>
              <Statistic text='average' value={calcAverage() || 0} />
            </tr>
            <tr>
              <Statistic text='positive' value={(good / total) * 100 + '%'} />
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = good + neutral + bad;

  const handleClick = (e) => {
    const feedback = e.target.textContent;
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Unknown feedback option chosen');
        break;
    }
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleClick} text='good' />
      <Button handleClick={handleClick} text='neutral' />
      <Button handleClick={handleClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
