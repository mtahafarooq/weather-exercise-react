import { FC, useEffect } from "react";
import { makeStyles, Snackbar } from "@material-ui/core";
import { RequestStatus } from "../../models/enums/request-status";
import Loader from "../../components/common/loader";
import MuiAlert from '@material-ui/lab/Alert';
import ToolBarContainer from './containers/toolbar-container';
import CarousalContainer from './containers/carousal-container';
import BarChartContainer from './containers/barchart-container';
interface ForecastsDashboardProps {
  forecastsRequestStatus: RequestStatus;
  fetchForecastAction: () => void;
}

const useStyles = makeStyles({
  root: {
    paddingTop: 150
  }
});

const ForecastsDashboard: FC<ForecastsDashboardProps> = ({
  forecastsRequestStatus,
  fetchForecastAction
}) => {

  useEffect(() => {
    fetchForecastAction();
  }, [fetchForecastAction]);

  const classes = useStyles();

  const ForecastsUI: FC = () => {
    return (
      <div className={classes.root}>
        <ToolBarContainer />
        <CarousalContainer />
        <BarChartContainer />
      </div>
    );
  }

  const FailureMessage: FC = () => {
    return (
      <Snackbar open={true} autoHideDuration={6000}>
        <MuiAlert elevation={6} variant="filled" severity={'error'}>
          An error occurred while fetching data!
        </MuiAlert>
      </Snackbar>
    );
  }

  return (
    <>
      { forecastsRequestStatus === RequestStatus.Loading && <Loader />}
      { forecastsRequestStatus === RequestStatus.Success && <ForecastsUI />}
      { forecastsRequestStatus === RequestStatus.Failure && <FailureMessage />}
    </>
  )
};

export default ForecastsDashboard;
