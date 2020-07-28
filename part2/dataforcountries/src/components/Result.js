import React from "react";

const Result = ({country: {name, capital, population, languages, flag}}) => {
  return (
    <div>
      <h1>{name}</h1>

      <p>capital {capital}</p>
      <p>population {population}</p>

      <h2>Spoken languages</h2>
      <ul>
        {languages.map((language) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </ul>

      <img src={flag} alt={name} style={{width: "120px", height: "120px"}} />
    </div>
  );
};

export default Result;
