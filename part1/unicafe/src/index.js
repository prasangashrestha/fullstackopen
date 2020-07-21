import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodClick = () => {
    setGood(good + 1);
  };

  const setNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const setBadClick = () => {
    setBad(bad + 1);
  };

  const averageScore = () => {
    return (good - bad) / (good + bad + neutral);
  };

  const positiveFeedback = () => {
    return (good / (good + bad + neutral)) * 100;
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={setGoodClick}>good</button>
      <button onClick={setNeutralClick}>neutral</button>
      <button onClick={setBadClick}>bad</button>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {averageScore()}</p>
      <p>positive feedback {positiveFeedback()}%</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
