import React, {useState} from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    {name: "Arto Hellas", number: "99990003"},
    {name: "Prasanga Shrestha", number: "0450934581"},
    {name: "Sulav Pradhan", number: "0990999"},
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPersons = [...persons, {name: newName, number: newNumber}];
    const sameNameCheck = persons.some((person) => person.name === newName);

    sameNameCheck
      ? alert(`${newName} is already added in the phone book`)
      : setPersons(newPersons);

    setNewName("");
    setNewNumber("");
  };

  const handleFilter = (e) => {
    setFilterName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} value={filterName} />

      <h2>add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;
