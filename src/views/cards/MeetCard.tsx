import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import {AvatarGroup} from "@material-ui/lab";
import {Meet} from "../../modules/meet/types";
import {DateTimeFormatter, LocalDateTime} from "@js-joda/core";
import {Grid, Typography} from "@material-ui/core";
import clsx from 'clsx'
import CardMedia from "@material-ui/core/CardMedia";
import {Project} from "../../modules/project/types";
import {useAddMeetUser, useDeleteMeetUser, useMeetUsers} from "../../modules/meet/hook";
import {useProject} from "../../modules/project/hook";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '&:hover': {
                cursor: 'pointer',
            }
        },
        rootActive: {
            background: 'red',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        datetimeContent: {
            flex: '1 0 auto',
            padding: 8,
            textAlign: 'center',
            background: '#FFCE00',
            color: 'white',
        },
        datetimeContentActive: {
            background: '#FF9503',
        },
        datetimeContent2: {
            flex: '1 0 auto',
            padding: 8,
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 51,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        avatarGroup: {
            '& .MuiAvatar-root': { width: theme.spacing(3), height: theme.spacing(3), fontSize: 15 },
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        body2: {
            color: theme.palette.grey["700"]
        },
        title: {
            paddingTop: theme.spacing(1),
        },
        description: {
            paddingBottom: theme.spacing(1),
            color: theme.palette.grey["600"]
        },
    }),
);

export const formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

export default function MeetCard(meet: Meet) {
    const classes = useStyles();
    const localDateTime = LocalDateTime.parse(meet.datetime, formatter)
    const date = localDateTime.format(DateTimeFormatter.ofPattern('dd.MM'))
    const time = localDateTime.format(DateTimeFormatter.ofPattern('HH:mm'))
    const { data: users = [], refetch } = useMeetUsers(meet.id)
    const { data: project = {} as Project } = useProject(meet.projectId)
    const mutation = useAddMeetUser()
    const mutation2 = useDeleteMeetUser()

    const active = users.find((user) => user.id === 1)
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
        <Card className={clsx(classes.root)} onClick={onClick}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <div className={clsx(classes.datetimeContent, active && classes.datetimeContentActive)}>
                        <Typography component="h5" variant="h5">
                            {time}
                        </Typography>
                    </div>
                    <CardMedia
                        className={classes.media}
                        image={project.image}
                        title={project.title}
                    />
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h6" className={classes.title}>
                        {meet.title}
                    </Typography>
                    <Typography variant="body2" className={classes.description}>
                        {project.title}
                    </Typography>
                    <AvatarGroup max={active ? 5 : 4} className={classes.avatarGroup}>
                        {users.map((user) => <Avatar alt={user.title} src={`/${user.image}`} className={classes.small}/>)}
                    </AvatarGroup>
                </Grid>
            </Grid>
        </Card>
    );
}