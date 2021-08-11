import { FC } from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { TemperatureUnit as TemperatureUnitEnum } from "../../../pages/Forecast/types/forecast-state-model";

interface TemperatureUnitProps {

  unit: TemperatureUnitEnum;

  unitChange: (unit: TemperatureUnitEnum) => void;

}

const TemperatureUnit: FC<TemperatureUnitProps> = ({ unit, unitChange }) => {
  const handleChange = (event) => {
    unitChange(event.target.value as TemperatureUnitEnum);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="temperature-unit" name="unit" value={ unit } onChange={ handleChange }>
        <FormControlLabel value="celsius" control={<Radio />} label="Celsius" />
        <FormControlLabel value="fahrenheit" control={<Radio />} label="Fahrenheit" />
      </RadioGroup>
    </FormControl>
  )
};

export default TemperatureUnit;
