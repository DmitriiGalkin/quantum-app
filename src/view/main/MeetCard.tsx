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
import {CardContent, Typography} from "@material-ui/core";
import useToggle from "../../tools/useToggle";
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        rootActive: {
            background: 'red',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
            padding: 8,
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
        datetime: {
            background: '#EB3F79',
        },
    }),
);

export default function MeetCard(meet: Meet) {
    const classes = useStyles();
    const localDateTime = LocalDateTime.parse(meet.datetime)
    const date = localDateTime.format(DateTimeFormatter.ofPattern('dd.MM'))
    const time = localDateTime.format(DateTimeFormatter.ofPattern('HH:mm'))
    const [active, toggle] = useToggle()

    return (
        <Card className={clsx(classes.root, active && classes.rootActive)} onClick={toggle}>
            <div className={classes.datetime}>
                <div className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {time}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        {date}
                    </Typography>
                </div>
            </div>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="h6">
                        {meet.title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {meet.project.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <AddIcon />
                    </IconButton>
                    <AvatarGroup max={4}>
                        {meet.users.map((user) => <Avatar alt={user.title} src={user.image} />)}
                    </AvatarGroup>
                </CardActions>
            </div>
        </Card>
    );
}