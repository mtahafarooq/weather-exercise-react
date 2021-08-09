import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from 'models/enums/request-status';
import { getForecastRoute } from '../forecast-routes';
import { initialState } from './initial-state';
import { ForecastStateModel } from "../types/forecast-state-model";

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
  reducers: {},
  extraReducers: {
    [ fetchForecastAction.pending ]: (state: ForecastStateModel) => {
      state.loadForecastsRequestStatus = RequestStatus.Loading;
    },
    [ fetchForecastAction.fulfilled ]: (state: ForecastStateModel, action) => {
      state.forecasts = action.payload;
      state.loadForecastsRequestStatus = RequestStatus.Success;
    },
    [ fetchForecastAction.rejected ]: (state: ForecastStateModel) => {
      state.forecasts = [];
      state.loadForecastsRequestStatus = RequestStatus.Failure;
    },
  },
});


