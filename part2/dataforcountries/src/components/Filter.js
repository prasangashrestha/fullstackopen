import React, {useState} from "react";
import Result from "./Result";

const Search = ({countries}) => {
  const [searchCountry, setSearchCountry] = useState("");

  const handleFilter = (e) => {
    setSearchCountry(e.target.value);
  };

  const filterCountry = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchCountry.toLowerCase());
  });

  return (
    <div>
      <label>find countries</label>
      <input type='text' value={searchCountry} onChange={handleFilter} />

      {filterCountry.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        filterCountry.map((country) => <p key={country.id}>{country.name}</p>)
      )}
      <Result />
    </div>
  );
};

export default Search;
