import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import DisplayedDate from "./DisplayedDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
          </div>
          <div className="col-6">
            <form>
              <input
                type="search"
                placeholder="enter a city"
                className="form-control"
                autoFocus="on"
              />
            </form>
          </div>
        </div>
        <div className="today">
          <ul>
            <li>
              <DisplayedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
            <li>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
              ></img>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°C</span>
            </li>

            <li>
              Humidity:{""} {weatherData.humidity}
              {""}%
            </li>
            <li>
              Wind:{""} {weatherData.wind} {""}km/h
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    let apiKey = "1b92415f0f2a81ca6f05973c2626e33c";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
