import React from "react";
import "./Weather.css"

export default function Weather() {
  let weatherData = {
    city: "London",
    description: "showers",
    date: "Friday 13",
    temp: "13",
    humidity: "90",
    wind: "10",
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png"
  };

  return (
    <div className="App">
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <form id="search-form">
          <input type="search" placeholder="Enter city" autoComplete="off" />

          <input type="submit" className="btn btn-light" />
        </form>
        <button className="btn btn-light">Current</button>
        <ul>
          <li>
            <span className="date">{weatherData.date}</span>
          </li>
          <li>
            <span className="forecast">{weatherData.description}</span>
          </li>
        </ul>
        <div className="row">
          <div className="col-7">
            <div className="overview">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="weather-icon"
              />
              <span className="temperature">{weatherData.temp}</span>
              <span className="units">
                <a href="/" className="celsius-link">
                  °C
                </a>{" "}
                |{" "}
                <a href="/" className="farenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
          <div className="col-5">
            <br />
            <ul className="humidity-wind">
              <li>
                <strong>Humidity:</strong>
                <span> {weatherData.humidity}</span>%
              </li>
              <br />
              <li>
                <strong>Wind:</strong>
                <span> {weatherData.wind} </span>
                mph
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div classNameName="source-code">
        <small>
          <a
            href="https://github.com/D-aisy/react-weather"
            rel="noreferrer"
            target="_blank"
          >
            Open-sourced code
          </a>
          <span className="my-name">by Daisy Cowley</span>
        </small>
      </div>
    </div>
  );
}
