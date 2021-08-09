import { RequestStatus } from "../../../models/enums/request-status";
import { ForecastStateModel } from "../types/forecast-state-model";

export const initialState: ForecastStateModel = {

  forecasts: [],

  loadForecastsRequestStatus: RequestStatus.Idle,

};
