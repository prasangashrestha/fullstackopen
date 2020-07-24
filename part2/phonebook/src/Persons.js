import React from "react";

const Persons = ({persons, filterName}) => {
  return persons
    .filter((person) =>
      person.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .map((filtered) => (
      <p key={filtered.name}>
        {filtered.name} {filtered.number}
      </p>
    ));
};

export default Persons;
