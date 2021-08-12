import { connect } from 'react-redux';
import ForecastsDashboard from '../';
import { State } from 'store/types';
import { loadForecastsRequestStatus } from "../selectors";
import { bindActionCreators } from "@reduxjs/toolkit";
import { fetchForecastAction } from "../slices/forecast-slice";

const mapStateToProps = (state: State) => {
  return {
    forecastsRequestStatus: loadForecastsRequestStatus(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    fetchForecastAction: fetchForecastAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastsDashboard);
