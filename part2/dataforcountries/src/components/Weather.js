import React from "react";

const Weather = ({weather: {location, current}}) => {
  return (
    <div>
      <h2>Weather in {location.name}</h2>
      <h5>temperature: {current.temperature} Celcius</h5>
      <img src={current.weather_icons} alt={current.weather_description} />
      <h5>
        wind: {current.wind_speed}mph direction {current.wind_dir}{" "}
      </h5>
    </div>
  );
};

export default Weather;
