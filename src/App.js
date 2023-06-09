// import logo from './logo.svg';
import React from 'react';
import Joke from './components/Joke';
import jokesData from './jokesData';
import './App.css';

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <div className="App">
      {jokeElements}

    </div>
  );
}

export default App;













