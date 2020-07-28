import React, {useState, useEffect} from "react";
import axios from "axios";

import "./App.css";
import Search from "./components/Filter";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  return (
    <div className='App'>
      <Search countries={countries} />
    </div>
  );
}

export default App;
