import { connect } from 'react-redux';
import CarousalContainer from 'components/forecast/carousal-container';
import { State } from 'store/types';
import { carouselCardData, carouselRightArrowDisabled, carouselLeftArrowDisabled } from "../selectors";
import { bindActionCreators } from "@reduxjs/toolkit";
import { decrementCursor, incrementCursor, selectWeatherCard } from "../slices/forecast-slice";

const mapStateToProps = (state: State) => {
    return {
        weatherList: carouselCardData(state),
        carouselLeftArrowDisabled: carouselLeftArrowDisabled(state),
        carouselRightArrowDisabled: carouselRightArrowDisabled(state)
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        carouselRightArrowClicked: incrementCursor,
        carouselLeftArrowClicked: decrementCursor,
        selectWeatherCard: selectWeatherCard
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarousalContainer);
