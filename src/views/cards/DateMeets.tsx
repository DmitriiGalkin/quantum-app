import React from 'react';
import {Meet, useAddMeetUser, useDeleteMeetUser} from "../../modules/meet";
import {convertToMeetTime, getMonth} from "../../tools/date";
import {Box, Typography, AvatarGroup, Avatar, Divider} from "@mui/material";
import {LocalDate} from "@js-joda/core";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import MeetCard from "./MeetCard";

const useStyles = makeStyles((theme: Theme) => ({
    meetsGroup: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        paddingBottom: theme.spacing(2),
    },
    date: {
        position: 'sticky',
        top: 0,
        padding: '12px 0',
        textAlign: 'center',
    },
    meets: {
        '& > div:first-child > div': {
            borderRadius: '0 12px 0 0',
        },
        '& > div:last-child > div': {
            borderRadius: '0 0 12px 0',
        },
    },
}));

interface DateMeetsProps {
    date: string
    meets: Meet[]
    refetch: () => void
}
export default function DateMeets({ date, meets, refetch }: DateMeetsProps): JSX.Element {
    const classes = useStyles();
    const localDate = LocalDate.parse(date)

    return (
        <div className={classes.meetsGroup} key={date}>
            <div>
                <div className={classes.date}>
                    <Typography style={{ fontFamily: 'Bebas Neue', fontSize: 26, lineHeight: '28px' }}>
                        {localDate.dayOfMonth()}
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontSize: 13, fontWeight: 700 }}>
                        {getMonth(localDate.monthValue())}
                    </Typography>
                </div>
            </div>
            <div style={{ flexGrow: 1 }} className={classes.meets}>
                {meets.map((meet, index) =>
                    <>
                        {Boolean(index) && <Divider light variant="middle" />}
                        <div key={meet.id}>
                            <MeetCard {...meet} refetch={refetch} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
