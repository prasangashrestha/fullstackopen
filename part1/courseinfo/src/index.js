import React from "react";
import ReactDOM from "react-dom";

const Course = (props) => {
  return <h1>{props.name}</h1>;
};

const Total = ({parts: [part1, part2, part3]}) => {
  return (
    <p>
      Number of exercises {part1.exercises + part2.exercises + part3.exercises}
    </p>
  );
};

const Part = ({part: {name, exercises}}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({parts: [part1, part2, part3]}) => {
  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  );
};

const App = () => {
  const {name, parts} = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Course name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
