import React, {useState} from 'react';
import {Typography, Slider, Button, Box, MobileStepper} from "@mui/material";
import {MeetStepProps} from "./types";
import {valuetext, valuetext2} from "./helper";
import { CalendarPicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

export default function MeetStep({ meet, setMeet }: MeetStepProps) {
    const [value2, setValue2] = React.useState<number[]>([600, 660]);
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());

    const handleChange = (event: any, newValue: number | number[]) => {
        const [startMinutes, endMinutes] = newValue as number[]
        setValue2(newValue as number[]);
        const startDatetime = value?.add(startMinutes, 'minute').format('YYYY-MM-DDTHH:mm:ss')
        const endDatetime = value?.add(endMinutes, 'minute').format('YYYY-MM-DDTHH:mm:ss')
        value && startDatetime && setMeet({
            ...meet,
            startDatetime,
            endDatetime,
        })
    };

    return (
        <div>
            <Box sx={{
                fontSize: '15px',
                '& .MuiPickersFadeTransitionGroup-root': {
                    fontFamily: 'Manrope, Arial',
                    fontSize: 16,
                    fontWeight: 700,
                    textTransform: 'capitalize',
                },
                '& .MuiPickersCalendarHeader-root': {
                    justifyContent: "space-between",
                    width: '100%',
                    marginTop: 1,
                },
                '& .MuiPickersCalendarHeader-labelContainer .MuiPickersCalendarHeader-switchViewButton': {
                    display: 'none',
                }}}>
                <CalendarPicker onChange={(date) => {
                    setValue(date)
                    date && setMeet({ ...meet, datetime: date.format('YYYY-MM-DDTHH:mm:ss') })
                }} date={value}
                                disablePast
                />
            </Box>

            <Box sx={{
                width: '280px',
                margin: '0 auto',
                '& .MuiSlider-valueLabel': {
                    fontFamily: 'Bebas Neue',
                    padding: '4px 6px',
                }
            }}>
                <Typography variant="h5" sx={{ paddingBottom: 6 }}>
                    Укажите время
                </Typography>
                <Slider
                    value={value2}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                    aria-labelledby="range-slider"
                    valueLabelFormat={valuetext2}
                    getAriaValueText={valuetext}
                    min={600} // Когда начинает работать место, в котором проводится проект
                    max={1080} // Когда заканчивает работать место, в котором проводится проект
                    step={15} // Каждые 15 минут
                />
            </Box>
        </div>
    );
}