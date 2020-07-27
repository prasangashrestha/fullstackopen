import React, {useState} from "react";
import Result from "./Result";

const Search = ({countries}) => {
  const [searchCountry, setSearchCountry] = useState("");

  const handleFilter = (e) => {
    setSearchCountry(e.target.value);
  };

  //filter the country based on the search
  const filterCountry = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchCountry.toLowerCase());
  });

  //rendering results based on the conditions
  const switchResult = () => {
    if (filterCountry.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }

    if (filterCountry.length <= 10) {
      //render the information on the particular filter
      if (filterCountry.length === 1) {
        return <Result country={filterCountry[0]} />;
      } else {
        //list out all the countries
        return filterCountry.map((country) => (
          <p key={country.alpha3Code}>{country.name}</p>
        ));
      }
    }
  };

  return (
    <div>
      <label>find countries</label>
      <input type='text' value={searchCountry} onChange={handleFilter} />

      {switchResult()}
    </div>
  );
};

export default Search;
