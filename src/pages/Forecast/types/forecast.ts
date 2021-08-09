import { Cloud } from "./cloud";
import { Rain } from "./rain";
import { Wind } from "./wind";
import { Weather } from "./weather";
import { Sys } from "./sys";
import { Main } from "./main";

export interface Forecast {

  clouds: Cloud;

  dt: number;

  dt_txt: string;

  main: Main;

  pop: number;

  sys: Sys;

  visibility: number;

  weather: Weather[];

  wind: Wind;

  rain: Rain;

}
