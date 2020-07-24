import React from "react";

const PersonForm = ({
  handleSubmit,
  newName,
  newNumber,
  handleName,
  handleNumber,
}) => {
  return (
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
  );
};

export default PersonForm;
