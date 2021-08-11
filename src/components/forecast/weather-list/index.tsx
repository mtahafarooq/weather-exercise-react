import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { CarouselCardData } from "../../../pages/Forecast/types/CarouselCardData";
import WeatherCard from "../weather-card";

interface WeatherListProps {

  weatherList: CarouselCardData[];

  onCardClick: (date: string) => void;

}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  }
});

const WeatherList: FC<WeatherListProps> = ({ weatherList, onCardClick }) => {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      { weatherList?.map((weatherCardData: CarouselCardData, index: number) => <WeatherCard key={ index } cardData={ weatherCardData } onCardClick={ (date: string) => onCardClick(date) } />) }
    </div>
  );
};

export default WeatherList;
