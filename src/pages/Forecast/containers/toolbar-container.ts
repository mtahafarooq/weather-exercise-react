import { connect } from 'react-redux';
import ToolBarContainer from 'components/forecast/toolbar-container';
import { State } from 'store/types';
import { temperatureUnit } from "../selectors";
import { bindActionCreators } from "@reduxjs/toolkit";
import { fetchForecastAction, temperatureUnitChange } from "../slices/forecast-slice";

const mapStateToProps = (state: State) => {
  return {
    temperatureUnit: temperatureUnit(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    temperatureUnitChange: temperatureUnitChange,
    fetchForecasts: fetchForecastAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBarContainer);
