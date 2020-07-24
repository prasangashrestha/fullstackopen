import React from "react";

const Filter = ({handleFilter, filterName}) => {
  return (
    <div>
      <label>filter shown with</label>
      <input type='text' value={filterName} onChange={handleFilter} />
    </div>
  );
};

export default Filter;
