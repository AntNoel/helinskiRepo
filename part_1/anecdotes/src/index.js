import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0]);
  const handleNextAnecdote = () => {
    let randNum = selected;
    //Generate a random number 0-5 that isn't the same as the current selected
    while (randNum === selected) {
      randNum = Math.floor(Math.random() * 6);
      console.log('Randum Number', randNum);
    }
    //Set that number as selected
    setSelected(randNum);
  };

  const handleVote = () => {
    //Spread the points into a new array
    let pointsCopy = [...points];
    //Get the current showing anecdote displaying
    //increase the array
    pointsCopy[selected] += 1;
    setPoints([...pointsCopy]);
  };

  const calcMostVotes = () => {
    const copyPoints = [...points];
    return anecdotes[points.indexOf(Math.max(...points))];
  };

  return (
    <div>
      Points State: {points}
      <p>Anecdote of the day</p>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{calcMostVotes()}</p>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
