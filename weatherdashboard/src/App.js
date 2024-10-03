import React, { useReducer, useEffect, useState } from "react";
import "./App.css";

const initialState = {
  loading: false,
  error: null,
  weather: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return { loading: false, weather: action.payload, error: null };
    case "ERROR":
      return { loading: false, error: action.payload, weather: null };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [city, setCity] = useState("New York");

  const fetchWeather = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
      );
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: "SUCCESS", payload: data });
      } else {
        dispatch({ type: "ERROR", payload: data.message });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    fetchWeather();
  });

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {state.weather && (
        <div>
          <h2>{state.weather.name}</h2>
          <p>Temperature: {Math.round(state.weather.main.temp - 273.15)}°C</p>
          <p>Condition: {state.weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
