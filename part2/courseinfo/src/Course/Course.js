import React from "react";

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({name, parts}) => {
  const partsMapped = parts.map((part) => {
    return <Part key={part.id} {...part} />;
  });

  const totalExercises = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);

  return (
    <div>
      <h2>{name}</h2>
      {partsMapped}
      <h5>total of {totalExercises} exercises</h5>
    </div>
  );
};

const Course = ({courses}) => {
  const coursesMapped = courses.map((course) => {
    return <Content key={course.id} {...course} />;
  });

  return (
    <div>
      <h1>Web development curriculum</h1>
      {coursesMapped}
    </div>
  );
};

export default Course;
