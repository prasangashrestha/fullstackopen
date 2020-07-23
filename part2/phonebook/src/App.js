import React, {useState} from "react";

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

  const filterList = () => {
    return persons
      .filter((person) => person.name.toLowerCase().includes(filterName))
      .map((filtered) => (
        <p key={filtered.name}>
          {filtered.name} {filtered.number}
        </p>
      ));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label>filter shown with</label>
        <input type='text' value={filterName} onChange={handleFilter} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            <label>name:</label>
            <input type='text' value={newName} onChange={handleName} />
          </p>

          <p>
            <label>number:</label>
            <input type='number' value={newNumber} onChange={handleNumber} />
          </p>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterList()}
    </div>
  );
};

export default App;
