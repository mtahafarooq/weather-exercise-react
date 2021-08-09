import { API_BASE_URL, API_KEY } from 'config';

export const getForecastRoute = (cityName: string = 'München,DE') => {
  return `${API_BASE_URL}?q=${cityName}&appid=${API_KEY}`;
}
