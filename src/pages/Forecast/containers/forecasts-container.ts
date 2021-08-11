import { connect } from 'react-redux';
import ForecastsDashboard from '../';
import { State } from 'store/types';
import { carouselCardData, loadForecastsRequestStatus, temperatureUnit, carouselRightArrowDisabled, carouselLeftArrowDisabled, selectedCardData } from "../selectors";
import { bindActionCreators } from "@reduxjs/toolkit";
import { decrementCursor, fetchForecastAction, incrementCursor, temperatureUnitChange, selectWeatherCard } from "../slices/forecast-slice";

const mapStateToProps = (state: State) => {
  return {
    weatherList: carouselCardData(state),
    temperatureUnit: temperatureUnit(state),
    selectedCardData: selectedCardData(state),
    forecastsRequestStatus: loadForecastsRequestStatus(state),
    carouselLeftArrowDisabled: carouselLeftArrowDisabled(state),
    carouselRightArrowDisabled: carouselRightArrowDisabled(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    fetchForecastAction: fetchForecastAction,
    temperatureUnitChange: temperatureUnitChange,
    carouselRightArrowClicked: incrementCursor,
    carouselLeftArrowClicked: decrementCursor,
    fetchForecasts: fetchForecastAction,
    selectWeatherCard: selectWeatherCard
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastsDashboard);
