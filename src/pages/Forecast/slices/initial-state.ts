import { RequestStatus } from "../../../models/enums/request-status";
import { ForecastStateModel, TemperatureUnit } from "../types/forecast-state-model";

export const initialState: ForecastStateModel = {

  pageSize: 3,

  carouselCursor: 0,

  selectedForecastCardDate: '',

  forecastDataByDay: {},

  temperatureUnit: TemperatureUnit.celsius,

  loadForecastsRequestStatus: RequestStatus.Idle,

};
