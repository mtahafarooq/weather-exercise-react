import { RequestStatus } from "../../../models/enums/request-status";
import { Forecast } from "./forecast";
import { CarouselCardData } from "./CarouselCardData";

export enum TemperatureUnit {

  celsius = 'celsius',

  fahrenheit = 'fahrenheit'

}

export interface ForecastStateModel {

  pageSize: number;

  carouselCursor: number;

  selectedForecastCardDate: string;

  temperatureUnit: TemperatureUnit;

  forecastDataByDay: ForecastsDataByDay;

  loadForecastsRequestStatus: RequestStatus;

}

export interface ForecastCardData {
  [ date: string ]: CarouselCardData;
}

export interface ForecastsDataByDay {
  [ date: string ]: Forecast[];
}
