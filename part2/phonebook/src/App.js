import React, {useState, useEffect} from "react";
import personService from "./services/persons";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  //getting the data after first render
  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, [persons]);

  //delete the person after clicking the person
  const handleDelete = (personToDelete) => {
    if (window.confirm(`Delete ${personToDelete}`)) {
      const selectedPerson = persons.find(
        (person) => person.name === personToDelete
      );

      personService.deletePerson(selectedPerson);
    }
  };

  //update existing user in the db
  const handleUpdate = (personToUpdate) => {
    const personObject = persons.find(
      (person) => person.name === personToUpdate
    );

    const updatedObject = {...personObject, number: newNumber};

    personService.updatePerson(personObject.id, updatedObject);
  };

  //create new user in the db
  const handleCreate = () => {
    const sameNameCheck = persons.some((person) => person.name === newName);

    const personObject = {
      name: newName,
      number: newNumber,
    };

    //check if the number is already in the list and add it in the persons array
    if (sameNameCheck) {
      if (
        window.confirm(
          `${newName} is already added in the phone book, replace the old number with new one`
        )
      ) {
        handleUpdate(newName);
      }
    } else {
      personService
        .createPerson(personObject)
        .then((returnedPerson) => setPersons([...persons, returnedPerson]));
    }
    !sameNameCheck && setNewName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //create a new person with validation
    handleCreate();

    setNewNumber("");
  };

  //Event handlers
  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
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
      <Persons
        persons={persons}
        filterName={filterName}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
