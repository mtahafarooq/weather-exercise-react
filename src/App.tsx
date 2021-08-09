import React, { useEffect } from 'react';
import './App.css';
import { fetchForecastAction } from 'pages/Forecast/slices/forecast-slice';
import { useDispatch } from "react-redux";
import ForecastsDashboard from "./pages/Forecast";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecastAction());
  }, [dispatch]);

  return (
    <>
      <ForecastsDashboard/>
    </>
  );
}

export default App;
