import { connect } from 'react-redux';
import BarChartContainer from 'components/forecast/barchart-container';
import { State } from 'store/types';
import { temperatureUnit, selectedCardData } from "../selectors";
import { bindActionCreators } from "@reduxjs/toolkit";

const mapStateToProps = (state: State) => {
    return {
        temperatureUnit: temperatureUnit(state),
        selectedCardData: selectedCardData(state),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BarChartContainer);
