import React from "react";
import "./WeatherForecast.css";
import axios, { Axios } from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "cb286bad3607984b41ed10c8de5cf00e";
  let latitude = props.coordinates.lat;
  let longtitude = props.coordinates.lon;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>
          <img src="http://openweathermap.org/img/wn/01d@2x.png"></img>
          <div className="WeatherForecastTemp">
            <span className="WeatherForecastTempMax">19°</span>
            <span className="WeatherForecastTempMin">9°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
