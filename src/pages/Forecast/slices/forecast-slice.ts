import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from 'models/enums/request-status';
import { getForecastRoute } from '../forecast-routes';
import { initialState } from './initial-state';
import { ForecastsDataByDay, ForecastStateModel, TemperatureUnit } from "../types/forecast-state-model";
import { Forecast } from "../types/forecast";

const REDUCER_NAME = 'forecast';

export const fetchForecastAction: any = createAsyncThunk(
  `${ REDUCER_NAME }/fetchForecastData`,
  async () => {
    const route = getForecastRoute()
    const response = await fetch(route).then(response => response.json());
    return response.list
  }
);

export const forecastSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    incrementCursor(state) {
      state.carouselCursor++
    },
    decrementCursor(state) {
      state.carouselCursor--
    },
    temperatureUnitChange(state, action: PayloadAction<TemperatureUnit>) {
      state.temperatureUnit = action.payload;
    },
    selectWeatherCard(state, action: PayloadAction<string>) {
      state.selectedForecastCardDate = action.payload;
    }
  },
  extraReducers: {
    [ fetchForecastAction.pending ]: (state: ForecastStateModel) => {
      state.loadForecastsRequestStatus = RequestStatus.Loading;
    },
    [ fetchForecastAction.fulfilled ]: (state: ForecastStateModel, action) => {
      state.forecastDataByDay = groupForecastsByDay(action.payload);
      state.selectedForecastCardDate = Object.keys(state.forecastDataByDay)[0];
      state.loadForecastsRequestStatus = RequestStatus.Success;
    },
    [ fetchForecastAction.rejected ]: (state: ForecastStateModel) => {
      state.loadForecastsRequestStatus = RequestStatus.Failure;
    },
  },
});

export const { incrementCursor, decrementCursor, temperatureUnitChange, selectWeatherCard } = forecastSlice.actions;

function groupForecastsByDay(forecasts: Forecast[]): ForecastsDataByDay {
  const forecastsDataByDay: ForecastsDataByDay = {};

  forecasts.forEach((forecast: Forecast) => {
    const forecastDate = forecast.dt_txt.split(' ')[0];

    if (forecastsDataByDay[forecastDate]) {
      forecastsDataByDay[forecastDate].push(forecast);
    } else {
      forecastsDataByDay[forecastDate] = [ forecast ];
    }
  });

  return forecastsDataByDay
}
