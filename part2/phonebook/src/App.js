import React, {useState, useEffect} from "react";
import personService from "./services/persons";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newPersons = [...persons, {name: newName, number: newNumber}];
    const sameNameCheck = persons.some((person) => person.name === newName);

    const personObject = {
      name: newName,
      number: newNumber,
    };

    //check if the number is already in the list and add it in the persons array
    sameNameCheck
      ? alert(`${newName} is already added in the phone book`)
      : personService
          .create(personObject)
          .then((returnedPerson) => setPersons([...persons, returnedPerson]));

    //check if the number is already on the list and add it to the database
    !sameNameCheck && setNewName("");
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
