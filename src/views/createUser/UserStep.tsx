import React from 'react';
import {Typography, Slider, Box} from "@mui/material";
import {UserStepProps} from "./types";
import {valuetext, valuetext2} from "./helper";
import { CalendarPicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

export default function UserStep({ user, setUser }: UserStepProps) {
    const calendarPickerDate = dayjs(meet.datetime)
    const sliderValue = [dayjs(meet.datetime).hour() * 60 + dayjs(meet.datetime).minute(), dayjs(meet.endDatetime).hour() * 60 + dayjs(meet.endDatetime).minute()]

    const calendarPickerOnChange = (date: Dayjs | null) => {
        if (!date) return
        setUser({
            ...user,
            datetime: date.startOf('day').add(dayjs(meet.datetime).hour(), 'hour').add(dayjs(meet.datetime).minute(), 'minute').format('YYYY-MM-DDTHH:mm:ss'),
            endDatetime: date.startOf('day').add(dayjs(meet.endDatetime).hour(), 'hour').add(dayjs(meet.endDatetime).minute(), 'minute').format('YYYY-MM-DDTHH:mm:ss'),
        })
    }
    const sliderOnChange = (event: any, newValue: number | number[]) => {
        const [minutes, endMinutes] = newValue as number[]
        setUser({
            ...user,
            datetime: dayjs(meet.datetime).startOf('day').add(minutes, 'minute').format('YYYY-MM-DDTHH:mm:ss'),
            endDatetime: dayjs(meet.endDatetime).startOf('day').add(endMinutes, 'minute').format('YYYY-MM-DDTHH:mm:ss'),
        })
    };

    return (
        <div>

        </div>
    );
}