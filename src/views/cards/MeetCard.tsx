import React from 'react';
import {Meet} from "../../modules/meet/types";
import {DateTimeFormatter, LocalDateTime} from "@js-joda/core";
import {useAddMeetUser, useDeleteMeetUser} from "../../modules/meet/hook";
import {formatter} from "../../tools/date";
import {Box, Typography, AvatarGroup, Avatar} from "@mui/material";

interface MeetCardProps extends Meet {
    refetch: () => void
}
export default function MeetCard({ refetch, ...meet }: MeetCardProps) {
    const localDateTime = LocalDateTime.parse(meet.datetime, formatter)
    const time = localDateTime.format(DateTimeFormatter.ofPattern('HH:mm'))
    const mutation = useAddMeetUser()
    const mutation2 = useDeleteMeetUser()

    const active = meet.users.find((user) => user.id === 1)
    const onClick = () => {
        if (active) {
            mutation2.mutate({ meetId: meet.id })
            refetch()
        } else {
            mutation.mutate({ meetId: meet.id })
            refetch()
        }
    }

    return (
        <Box style={{ padding: '8px 16px' }} onClick={onClick}>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Box style={{ flexGrow: 1 }}>
                    <Typography variant="h6">
                        {meet.project.title}
                    </Typography>
                    <Box sx={{ display: 'flex', paddingTop: 1 }}>
                        <AvatarGroup max={active ? 5 : 4} >
                            {meet.users.map((user) => <Avatar alt={user.title} src={user.image} sx={{ width: 24, height: 24 }}/>)}
                        </AvatarGroup>
                    </Box>
                </Box>
                <Typography variant="subtitle1">
                    {time}
                </Typography>
            </Box>
        </Box>
    );
}
