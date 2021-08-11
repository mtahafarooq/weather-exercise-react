import { initialState as ForecastsState } from 'pages/Forecast/slices/initial-state';

export type State = {
    forecast: typeof ForecastsState;
};
