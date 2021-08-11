import { FC } from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { CarouselCardData } from "../../../pages/Forecast/types/CarouselCardData";
import { format } from 'date-fns';

interface WeatherCardProps {

  cardData: CarouselCardData;

  onCardClick: (date: string) => void;

}

const useStyles = makeStyles({
  root: {
    marginRight: 10,
    marginLeft: 10,
    minWidth: 200,
    maxWidth: 200
  },
  card: {
    textAlign: 'center',
    "&:hover, &:focus": {
      cursor: 'pointer'
    }
  }
});

const WeatherCard: FC<WeatherCardProps> = ({ cardData , onCardClick }) => {
  const classes = useStyles();

  return (
    <Card
      onClick={ () => onCardClick(cardData.date) }
      className={ classes.root }>
      <CardContent className={ classes.card }>
        <Typography>Temperature</Typography>
        <Typography>
          <strong>{ cardData.averageTemperature }</strong>
        </Typography>
        <Typography>{ format(new Date(cardData.date), 'dd MMM. yyyy') }</Typography>
      </CardContent>
    </Card>
  )
};

export default WeatherCard;
