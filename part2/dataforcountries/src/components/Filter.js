import React, {useState} from "react";
import Result from "./Result";

const Search = ({countries}) => {
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({});
  const [show, setShow] = useState(false);

  const handleFilter = (e) => {
    setSearchCountry(e.target.value);
  };

  const handleToggle = (country) => {
    setShow(true);
    setSelectedCountry(country);
  };

  //filter the country based on the search
  const filterCountry = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchCountry.toLowerCase());
  });

  //render a list of countries when results are less than 10
  const renderCountries = filterCountry.map((country) => {
    return (
      <div>
        <p key={country.alpha3Code}>
          {country.name}
          <button onClick={() => handleToggle(country)}>show</button>
        </p>
      </div>
    );
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
        return renderCountries;
      }
    }
  };

  return (
    <div>
      <label>find countries</label>
      <input type='text' value={searchCountry} onChange={handleFilter} />

      {switchResult()}
      {show && <Result country={selectedCountry} />}
    </div>
  );
};

export default Search;
