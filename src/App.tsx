import React  from 'react';
import './App.css';
import ForecastsDashboard from "./pages/Forecast/containers/forecasts-container";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <ForecastsDashboard />
    </Container>
  );
}

export default App;
