import React, {useState} from 'react';
import {Typography, Slider, Button} from "@mui/material";
import {MeetStepProps} from "./types";
import {valuetext, valuetext2} from "./helper";



export default function MeetStep({ handleBack, handleNext }: MeetStepProps) {
    const [value, setValue] = React.useState<number[]>([20, 37]);
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div>
            <Typography>
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
            <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                onClick={handleNext}
                sx={{
                    borderRadius: 2,
                    marginRight: 2,
                    marginTop: 1,
                }}
            >
                Далее
            </Button>
        </div>
    );
}