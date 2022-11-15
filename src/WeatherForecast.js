import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
