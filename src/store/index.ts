import { configureStore } from '@reduxjs/toolkit';
import { forecastSlice } from 'pages/Forecast/slices/forecast-slice';

export const store = configureStore({
    reducer: { forecast: forecastSlice.reducer },
});
