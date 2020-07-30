import React from "react";

const Persons = ({persons, filterName, handleDelete}) => {
  return persons
    .filter((person) =>
      person.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .map((filtered) => (
      <p key={filtered.name}>
        {filtered.name} {filtered.number}
        <button onClick={() => handleDelete(filtered.name)}>delete</button>
      </p>
    ));
};

export default Persons;
