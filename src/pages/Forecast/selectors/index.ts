import { createSelector } from "reselect";
import { State } from 'store/types';
import { ForecastsDataByDay, ForecastStateModel, TemperatureUnit } from "../types/forecast-state-model";
import { CarouselCardData } from "../types/CarouselCardData";
import { Forecast } from "../types/forecast";
import { format } from "date-fns";

const convertKelvinToCelsius = (temperature: number): number => {
    return Math.floor(temperature - 273.15)
}

const convertKelvinToFahrenheit = (temperature: number): number => {
    return Math.floor(convertKelvinToCelsius(temperature) * (9 / 5) + 32);
}

export const forecastState = (state: State) => state.forecast;

export const forecastDataByDay = createSelector([ forecastState ], (forecastState: ForecastStateModel) => forecastState.forecastDataByDay);

export const carouselCursor = createSelector([ forecastState ], (forecastState: ForecastStateModel) => forecastState.carouselCursor);

export const pageSize = createSelector([ forecastState ], (forecastState: ForecastStateModel) => forecastState.pageSize);

export const temperatureUnit = createSelector([ forecastState ], (forecastState: ForecastStateModel) => forecastState.temperatureUnit);

export const loadForecastsRequestStatus = createSelector([ forecastState ], (forecastState: ForecastStateModel) => forecastState.loadForecastsRequestStatus);

export const carouselLeftArrowDisabled = createSelector([ carouselCursor ], (cursor: number) => (cursor <= 0));

export const selectedForecastCardDate = createSelector([ forecastState ], (forecastState: ForecastStateModel) => forecastState.selectedForecastCardDate);

export const carouselRightArrowDisabled = createSelector([ carouselCursor, pageSize, forecastDataByDay ], (cursor: number, pageSize: number, forecastDataByDay: ForecastsDataByDay) =>
  (cursor + pageSize) === Object.keys(forecastDataByDay).length);

// for carousel
export const carouselCardData = createSelector(
  [ forecastDataByDay, carouselCursor, pageSize, temperatureUnit ], (forecastDataByDay: ForecastsDataByDay, cursor: number, pageSize: number, temperatureUnit: TemperatureUnit) => {
      const carouselData: CarouselCardData[] = [];
      Object.entries(forecastDataByDay).forEach((data) => {
          const forecasts = data[1];
          const accumulatedTemperature = forecasts.reduce((accumulatedTemperature: number, current: Forecast) => accumulatedTemperature + current.main.temp, 0)
          const averageTemperature = accumulatedTemperature / forecasts.length;

          carouselData.push({date: data[0], averageTemperature: temperatureUnit === TemperatureUnit.celsius ? `${ convertKelvinToCelsius(averageTemperature) }C` : `${ convertKelvinToFahrenheit(averageTemperature) }F` });
      });

      return carouselData.slice(cursor, cursor + pageSize);
});

// for bar chart
export const selectedCardData = createSelector([ forecastDataByDay, selectedForecastCardDate, temperatureUnit ], (forecastDataByDay: ForecastsDataByDay, selectedForecastCardDate: string, unit: TemperatureUnit) => {
    return forecastDataByDay[selectedForecastCardDate]?.map((forecast: Forecast) => ({
        ...forecast,
        main: {
            ...forecast.main,
            temp: unit === TemperatureUnit.celsius ? convertKelvinToCelsius(forecast.main.temp) : convertKelvinToFahrenheit(forecast.main.temp)
        },
        dt_txt: format(new Date(forecast.dt_txt), 'p')
    }));
});
