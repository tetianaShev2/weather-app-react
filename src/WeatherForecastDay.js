import React from "react";
import Weather from "./Weather";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay">{day()}</div>
      <img
        src={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
      ></img>
      <div className="WeatherForecastTemp">
        <span className="WeatherForecastTempMax">{maxTemperature()}°</span>
        <span className="WeatherForecastTempMin">{minTemperature()}°</span>
      </div>
    </div>
  );
}
