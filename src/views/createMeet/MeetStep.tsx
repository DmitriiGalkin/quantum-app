import React, {useState} from 'react';
import {Typography, Slider, Button, Box, MobileStepper} from "@mui/material";
import {MeetStepProps} from "./types";
import {valuetext, valuetext2} from "./helper";
import { CalendarPicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export default function MeetStep({ meet, setMeet }: MeetStepProps) {
    if (!meet.datetime) throw new Error('MeetStep `datetime` undefined');
    const s = dayjs(meet.datetime).hour() * 60 + dayjs(meet.datetime).minute()
    const e = dayjs(meet.endDatetime).hour() * 60 + dayjs(meet.endDatetime).minute()
    //console.log(dayjs(meet.datetime), 'dayjs(meet.datetime)')
    //console.log(meet.datetime, '=>', s, ' ',meet.endDatetime, '=>', e, 'in MeetStep')
    const [value2, setValue2] = React.useState<number[]>([s, e]);
    const [value, setValue] = React.useState<Dayjs | null>(meet.datetime ? dayjs(meet.datetime): dayjs().startOf('day'));

    const onChangeDate = (date: Dayjs) => {
        setValue(date)
        date && setMeet({ ...meet, datetime: date.format('YYYY-MM-DDTHH:mm:ss') })
    }
    const minutesHandleChange = (event: any, newValue: number | number[]) => {
        const [startMinutes, endMinutes] = newValue as number[]
        setValue2(newValue as number[]);
        const datetime = value?.add(startMinutes, 'minute').format('YYYY-MM-DDTHH:mm:ss')
        const endDatetime = value?.add(endMinutes, 'minute').format('YYYY-MM-DDTHH:mm:ss')
        value && datetime && setMeet({
            ...meet,
            datetime,
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
                },
                '& .MuiPickersDay-root.Mui-selected': {
                    backgroundColor: (theme)=> theme.palette.primary.main + '!important',
                }
            }}>
                <CalendarPicker onChange={onChangeDate} date={value} disablePast/>
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
                    onChange={minutesHandleChange}
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