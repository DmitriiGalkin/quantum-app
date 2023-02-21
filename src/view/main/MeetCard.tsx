import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {red} from '@material-ui/core/colors';
import {AvatarGroup} from "@material-ui/lab";
import PlusOne from '@material-ui/icons/PlusOne';
import {Meet} from "../../modules/meet/types";
import {DateTimeFormatter, LocalDateTime} from "@js-joda/core";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export default function MeetCard(meet: Meet) {
    const classes = useStyles();
    const localDateTime = LocalDateTime.parse(meet.datetime)

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={meet.project.image} alt={meet.project.title}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <PlusOne />
                    </IconButton>
                }
                title={meet.title}
                subheader={localDateTime.format(DateTimeFormatter.ofPattern('dd.MM.yy\u00A0\u00A0HH:mm'))}
            />
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <AddIcon />
                </IconButton>
                <AvatarGroup max={4}>
                    {meet.users.map((user) => <Avatar alt={user.title} src={user.image} />)}
                </AvatarGroup>
            </CardActions>
        </Card>
    );
}