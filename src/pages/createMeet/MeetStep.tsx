import React from 'react';
import {Typography, Slider, Box} from "@mui/material";
import {MeetStepProps} from "./types";
import {valuetext, valuetext2} from "./helper";
import { CalendarPicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

export default function MeetStep({ meet, setMeet }: MeetStepProps) {
    const calendarPickerDate = dayjs(meet.datetime)
    const sliderValue = [dayjs(meet.datetime).hour() * 60 + dayjs(meet.datetime).minute(), dayjs(meet.endDatetime).hour() * 60 + dayjs(meet.endDatetime).minute()]

    const calendarPickerOnChange = (date: Dayjs | null) => {
        if (!date) return
        setMeet({
            ...meet,
            datetime: date.startOf('day').add(dayjs(meet.datetime).hour(), 'hour').add(dayjs(meet.datetime).minute(), 'minute').format('YYYY-MM-DDTHH:mm:ss'),
            endDatetime: date.startOf('day').add(dayjs(meet.endDatetime).hour(), 'hour').add(dayjs(meet.endDatetime).minute(), 'minute').format('YYYY-MM-DDTHH:mm:ss'),
        })
    }
    const sliderOnChange = (event: any, newValue: number | number[]) => {
        const [minutes, endMinutes] = newValue as number[]
        setMeet({
            ...meet,
            datetime: dayjs(meet.datetime).startOf('day').add(minutes, 'minute').format('YYYY-MM-DDTHH:mm:ss'),
            endDatetime: dayjs(meet.endDatetime).startOf('day').add(endMinutes, 'minute').format('YYYY-MM-DDTHH:mm:ss'),
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
                <CalendarPicker onChange={calendarPickerOnChange} date={calendarPickerDate} disablePast/>
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
                    value={sliderValue}
                    onChange={sliderOnChange}
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