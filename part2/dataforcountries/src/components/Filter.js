import React, {useState, useEffect} from "react";
import Result from "./Result";
import axios from "axios";
import Weather from "./Weather";

const Search = ({countries}) => {
  const api_key = process.env.REACT_APP_API_KEY;

  const [searchCountry, setSearchCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedWeather, setSelectedWeather] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (selectedCountry.name) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${api_key}&query=${selectedCountry.name}`
        )
        .then((response) => {
          setSelectedWeather(response.data);
        });
    }
  }, [selectedCountry, api_key]);

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
      <div key={country.alpha3Code}>
        <p>
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
        //only render one result
        show && setShow(false);
        //check if the selected country is the same the filtered
        if (filterCountry[0] !== selectedCountry) {
          setSelectedCountry(filterCountry[0]);
        }
        Object.keys(selectedCountry).length === 0 &&
          setSelectedCountry(filterCountry[0]);
        return <Result country={selectedCountry} />;
      } else {
        //list out all the countries
        return renderCountries;
      }
    }
  };

  const switchWeather = () => {
    if (Object.keys(selectedWeather).length) {
      if (filterCountry.length === 1)
        return <Weather weather={selectedWeather} />;
      if (show) return <Weather weather={selectedWeather} />;
    }
  };

  return (
    <div>
      <label>find countries</label>
      <input type='text' value={searchCountry} onChange={handleFilter} />

      {switchResult()}
      {show && <Result country={selectedCountry} />}
      {switchWeather()}
    </div>
  );
};

export default Search;
