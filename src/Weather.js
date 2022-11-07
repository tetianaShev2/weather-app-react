import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>New York</h1>
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
          <li>Last updated:</li>
          <li>Description</li>
          <li>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt=""></img>
            <span className="temperature">16</span>
            <span className="units">°C</span>
          </li>

          <li>Humidity:</li>
          <li>Wind:</li>
        </ul>
      </div>
    </div>
  );
}
