import React from "react";

const Course = ({course: {id, name, parts}}) => {
  const partsMapped = parts.map((part) => {
    return (
      <p key={part.id}>
        {part.name}: {part.exercises}
      </p>
    );
  });

  const totalExercises = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);

  return (
    <div>
      <h1>{name}</h1>
      {partsMapped}
      <p>total of {totalExercises} exercises </p>
    </div>
  );
};

export default Course;
