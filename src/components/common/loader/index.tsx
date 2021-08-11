import { FC } from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Loader: FC = () => {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <CircularProgress />
    </div>
  )
};

export default Loader;
