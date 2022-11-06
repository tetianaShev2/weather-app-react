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
      <ul>
        <li>Last updated:</li>
        <li>Description</li>
        <li>
          <img src="" alt=""></img>
        </li>
        <li>Temperature</li>
        <li>Humidity</li>
        <li>Wind</li>
      </ul>
    </div>
  );
}
