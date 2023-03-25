// import logo from './logo.svg';
import React from 'react';
import Joke from './components/Joke';
import './App.css';

function App() {
  return (
    <div className="App">
      <Joke
        punchline="It's hard to explain puns to kleptomaniacs because they always take things literally"
        isPun={true}
        upvote={10}
        downvote={2}
        comments={[{author: "", body: "", title: ""}]}
      />
      <Joke
        setup=" I got my daughter a fridge for her birthday?"
        punchline="I can't wait to see her face light up when she opens it."
        isPun={false}

       />
       <Joke
        setup=" How did the hacker escape the police?"
        punchline="He just ransomware."
        isPun={true}

       />
       <Joke
        setup=" Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}

       />
       <Joke
        setup=" Why do bees stay in the hive in winter?"
        punchline="Swarm."
        isPun={true}

       />
       <Joke
        setup=" Whats the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        isPun={false}

       />

    </div>
  );
}

export default App;
