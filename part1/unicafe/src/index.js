import React, {useState} from "react";
import ReactDOM from "react-dom";

const Statistic = ({text, value}) => {
  return (
    <td>
      {text} {value}
    </td>
  );
};

const Statistics = ({good, bad, neutral}) => {
  const all = () => {
    return good + bad + neutral;
  };

  const averageScore = () => {
    return (good - bad) / (good + bad + neutral);
  };

  const positiveFeedback = () => {
    return (good / (good + bad + neutral)) * 100;
  };

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <Statistic text='good' value={good}></Statistic>
          </tr>
          <tr>
            <Statistic text='neutral' value={neutral}></Statistic>
          </tr>
          <tr>
            <Statistic text='bad' value={bad}></Statistic>
          </tr>
          <tr>
            <Statistic text='all' value={all()}></Statistic>
          </tr>
          <tr>
            <Statistic text='average score' value={averageScore()}></Statistic>
          </tr>
          <tr>
            <Statistic
              text='positive feedback'
              value={positiveFeedback()}
            ></Statistic>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Button = ({onClick, children}) => {
  return <button onClick={onClick}>{children}</button>;
};

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

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={setGoodClick}>good</Button>
      <Button onClick={setNeutralClick}>neutral</Button>
      <Button onClick={setBadClick}>bad</Button>

      {good || neutral || bad ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>no feedback given</p>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
