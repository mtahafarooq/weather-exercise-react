import { RequestStatus } from "../../../models/enums/request-status";
import { Forecast } from "./forecast";

export interface ForecastStateModel {

  forecasts: Forecast[]

  loadForecastsRequestStatus: RequestStatus

}
