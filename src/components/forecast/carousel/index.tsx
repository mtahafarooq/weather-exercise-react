import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import NavigationButton from "../../common/navigation-button";
import { Direction } from "../../../models/enums/direction";
import WeatherList from "../weather-list";
import { CarouselCardData } from "../../../pages/Forecast/types/CarouselCardData";

interface CarouselProps {

  weatherList: CarouselCardData[];

  onCarouselButtonClick: (direction: Direction) => void;

  leftButtonDisabled: boolean;

  rightButtonDisabled: boolean;

  onCardClick: (date: string) => void;

}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Carousel: FC<CarouselProps> = ({ weatherList, onCarouselButtonClick, leftButtonDisabled, rightButtonDisabled , onCardClick }) => {
  const classes = useStyles();

  return (

    <div className={ classes.root }>
      <NavigationButton direction={ Direction.left } disabled={ leftButtonDisabled } onButtonClick={ onCarouselButtonClick } />

      <WeatherList weatherList={ weatherList } onCardClick={ onCardClick } />

      <NavigationButton direction={ Direction.right } disabled={ rightButtonDisabled } onButtonClick={ onCarouselButtonClick } />
    </div>
  )
};

export default Carousel;
