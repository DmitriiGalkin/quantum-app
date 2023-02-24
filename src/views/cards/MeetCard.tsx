import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {AvatarGroup} from "@material-ui/lab";
import {Meet} from "../../modules/meet/types";
import {DateTimeFormatter, LocalDateTime} from "@js-joda/core";
import AddIcon from '@material-ui/icons/Add';
import {CardActionArea, CardContent, Grid, Typography} from "@material-ui/core";
import useToggle from "../../tools/useToggle";
import clsx from 'clsx'
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {User} from "../../modules/user/types";
import {USER} from "../../modules/user/data";
import CardMedia from "@material-ui/core/CardMedia";
import {Project} from "../../modules/project/types";

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

const formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

export default function MeetCard(meet: Meet) {
    const classes = useStyles();
    const localDateTime = LocalDateTime.parse(meet.datetime, formatter)
    const date = localDateTime.format(DateTimeFormatter.ofPattern('dd.MM'))
    const time = localDateTime.format(DateTimeFormatter.ofPattern('HH:mm'))

    const {data: users = [], refetch } = useQuery<User[]>({
        queryKey: ['meetUsers', meet.id],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/meets/" + meet.id + "/users")
                .then((res) => res.data),
    })
    const {data: project = {} as Project } = useQuery<Project>({
        queryKey: ['project', meet.projectId],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/projects/" + meet.projectId)
                .then((res) => res.data),
    })
    const mutation = useMutation(newTodo => {
        return axios
            .post("http://localhost:3001/api/v1/user_meet/" + 1 + '/' + meet.id)
            .then((res) => res.data)
    })
    const mutation2 = useMutation(newTodo => {
        return axios
            .delete("http://localhost:3001/api/v1/user_meet/" + 1 + '/' + meet.id)
            .then((res) => res.data)
    })
    const active = users.find((user) => user.id === 1)

//     <Typography variant="body2">
//         {date}
// </Typography>
    return (
        <Card className={clsx(classes.root)} onClick={() => {
            if (active) {
                mutation2.mutate()
                refetch()
            } else {
                mutation.mutate()
                refetch()
            }
        }}>
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
                        {active && <Avatar alt={USER.title} src={`${USER.image}`} className={classes.small}/>}
                        {users.map((user) => <Avatar alt={user.title} src={`/${user.image}`} className={classes.small}/>)}
                    </AvatarGroup>
                </Grid>
            </Grid>
        </Card>
    );
}