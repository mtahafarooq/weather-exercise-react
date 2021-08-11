import { FC, useEffect } from "react";
import TemperatureUnit from "../../components/forecast/temperature-unit";
import { TemperatureUnit as TemperatureUnitEnum } from "./types/forecast-state-model";
import { Button, makeStyles, Snackbar, Typography } from "@material-ui/core";
import { Direction } from "../../models/enums/direction";
import Carousel from "../../components/forecast/carousel";
import { RequestStatus } from "../../models/enums/request-status";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Loader from "../../components/common/loader";
import MuiAlert from '@material-ui/lab/Alert';
import { CarouselCardData } from "./types/CarouselCardData";

interface ForecastsDashboardProps {
  weatherList: CarouselCardData[];
  temperatureUnit: TemperatureUnitEnum;
  forecastsRequestStatus: RequestStatus;
  carouselLeftArrowDisabled: boolean;
  carouselRightArrowDisabled: boolean;
  selectedCardData: any;
  fetchForecasts: any;
  selectWeatherCard: (date: string) => void;
  fetchForecastAction: () => void;
  temperatureUnitChange: (unit: TemperatureUnitEnum) => void;
  carouselRightArrowClicked: () => void;
  carouselLeftArrowClicked: () => void;
}

const useStyles = makeStyles({
  root: {
    paddingTop: 150
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 35
  },
  chart: {
    margin: '0 auto',
    marginTop: 50
  },
  unit: {
    textAlign: 'center'
  }
});

const ForecastsDashboard: FC<ForecastsDashboardProps> = ({
  weatherList,
  selectedCardData,
  selectWeatherCard,
  carouselLeftArrowDisabled,
  carouselRightArrowDisabled,
  temperatureUnit,
  temperatureUnitChange,
  carouselRightArrowClicked,
  carouselLeftArrowClicked,
  fetchForecasts,
  forecastsRequestStatus,
  fetchForecastAction
}) => {

  useEffect(() => {
    fetchForecastAction();
  }, [ fetchForecastAction ]);

  const classes = useStyles();

  const handleCarouselButtonClick = (direction: Direction) => {
    direction === Direction.right ? carouselRightArrowClicked() : carouselLeftArrowClicked();
  };

  const ForecastsUI: FC = () => {
    return (
      <div className={ classes.root }>

        <div className={ classes.toolbar }>
          <TemperatureUnit unit={ temperatureUnit } unitChange={ temperatureUnitChange }/>
          <Button variant="contained" onClick={ fetchForecasts }>Refresh</Button>
        </div>

        <Carousel
          onCardClick={ (date: string) => selectWeatherCard(date) }
          rightButtonDisabled={ carouselRightArrowDisabled }
          leftButtonDisabled={ carouselLeftArrowDisabled }
          weatherList={ weatherList }
          onCarouselButtonClick={ handleCarouselButtonClick } />

        <ResponsiveContainer width={ 800 } height={ 500 } className={ classes.chart }>
          <BarChart data={ selectedCardData }>
            <XAxis dataKey="dt_txt" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="main.temp" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <Typography className={ classes.unit }>{ temperatureUnit }</Typography>

      </div>
    );
  }

  const FailureMessage: FC = () => {
    return (
      <Snackbar open={ true } autoHideDuration={6000}>
        <MuiAlert elevation={6} variant="filled" severity={ 'error' }>
          An error occurred while fetching data!
        </MuiAlert>
      </Snackbar>
    );
  }

  return (
    <>
      { forecastsRequestStatus === RequestStatus.Loading && <Loader /> }
      { forecastsRequestStatus === RequestStatus.Success && <ForecastsUI /> }
      { forecastsRequestStatus === RequestStatus.Failure && <FailureMessage /> }
    </>
  )
};

export default ForecastsDashboard;
