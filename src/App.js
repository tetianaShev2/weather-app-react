import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <div className="Footer">
          <p>
            This project was coded by Tetiana Shevchuk and is {""}
            <a
              href="https://github.com/tetianaShev2/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
