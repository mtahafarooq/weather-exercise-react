import { FC } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { makeStyles, Typography } from "@material-ui/core";
import { TemperatureUnit as TemperatureUnitEnum } from "pages/Forecast/types/forecast-state-model";

interface BarChartContainerProps {
    selectedCardData: any;
    temperatureUnit: TemperatureUnitEnum;
}

const useStyles = makeStyles({
    chart: {
        margin: '0 auto',
        marginTop: 50
    },
    unit: {
        textAlign: 'center'
    }
});


const BarChartContainer: FC<BarChartContainerProps> = ({
    selectedCardData,
    temperatureUnit
}) => {

    const classes = useStyles();

    return (
        <>
            <ResponsiveContainer width={800} height={500} className={classes.chart}>
                <BarChart data={selectedCardData}>
                    <XAxis dataKey="dt_txt" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="main.temp" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            <Typography className={classes.unit}>{temperatureUnit}</Typography>
        </>
    )
};

export default BarChartContainer;
