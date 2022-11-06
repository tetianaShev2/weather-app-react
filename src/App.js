import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Weather App</header>
        <button className="btn btn-primary"> click </button>
        <div vlassName="Footer">
          <p>
            This project was coded by Tetiana Shevchuk and is {""}
            <a
              href="https://github.com/tetianaShev2/weather-app-react"
              target="_blank"
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
