import { FC } from "react";
import { Fab, makeStyles } from "@material-ui/core";
import { Direction } from "../../../models/enums/direction";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

interface NavigationButtonProps {

  direction: Direction;

  disabled: boolean;

  onButtonClick: (direction: Direction) => void;

}

const useStyles = makeStyles({
  root: {
    marginRight: 20,
    marginLeft: 20,
  }
});

const NavigationButton: FC<NavigationButtonProps> = ({ direction, disabled, onButtonClick }) => {
  const classes = useStyles();

  return (
    <Fab
      color="primary"
      disabled={ disabled }
      className={ classes.root }
      aria-label={ direction }
      onClick={ () => onButtonClick(direction) } >
      { direction === Direction.left && <ArrowBackIos /> }
      { direction === Direction.right && <ArrowForwardIos /> }
    </Fab>
  )
};

export default NavigationButton;
