import React from "react";
import DisplayedDate from "./DisplayedDate";

export default function WeatherInfo(props) {
  return (
    <div className="today">
      <ul>
        <li>
          <DisplayedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
        <li>
          <img src={props.data.iconUrl} alt={props.data.description}></img>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C</span>
        </li>

        <li>
          Humidity:{""} {props.data.humidity}
          {""}%
        </li>
        <li>
          Wind:{""} {props.data.wind} {""}km/h
        </li>
      </ul>
    </div>
  );
}
