import { FC } from "react";
import TemperatureUnit from "components/forecast/temperature-unit";
import { TemperatureUnit as TemperatureUnitEnum } from "pages/Forecast/types/forecast-state-model";
import { Button, makeStyles } from "@material-ui/core";

interface ToolBarContainerProps {
    temperatureUnit: TemperatureUnitEnum;
    temperatureUnitChange: (unit: TemperatureUnitEnum) => void;
    fetchForecasts: any;
}

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 35
    }
});

const ToolBarContainer: FC<ToolBarContainerProps> = ({ temperatureUnit, temperatureUnitChange, fetchForecasts }) => {

    const classes = useStyles();

    return (
        <div className={classes.toolbar}>
            <TemperatureUnit unit={temperatureUnit} unitChange={temperatureUnitChange} />
            <Button variant="contained" onClick={fetchForecasts}>Refresh</Button>
        </div>
    )
};

export default ToolBarContainer;
