import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value: number) {
    return `${value}°C2222`;
}
function valuetext2(value: number) {
    const {hours, minutes} = toHoursAndMinutes(value)
    return `${hours}:${minutes}`;
}
function toHoursAndMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
}

export default function SelectDatetime({ handleBack, handleNext }: {handleBack: () => void, handleNext: () => void }) {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className={classes.root}>
            <div>
                <Typography component="span">
                    Сегодня
                </Typography>
                <Typography component="span">
                    Завтра
                </Typography>
                <Typography component="span">
                    Указать дату
                </Typography>
            </div>
            <Typography id="range-slider" gutterBottom>
                Выберите время встречи
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                valueLabelFormat={valuetext2}
                getAriaValueText={valuetext}
                min={600} // Когда начинает работать место, в котором проводится проект
                max={1080} // Когда заканчивает работать место, в котором проводится проект
                step={15} // Каждые 15 минут
            />
            <Button onClick={handleBack}>
                Back
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
            >
                Next
            </Button>
        </div>
    );
}