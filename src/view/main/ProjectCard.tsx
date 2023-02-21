import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import {Project} from "../../modules/project/types";
import {Button, CardActionArea} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // maxWidth: 345,
            height: '100%',
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

export default function Group(project: Project) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={()=>console.log('в проект')}>
                <CardMedia
                    className={classes.media}
                    image={project.image}
                    title={project.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Подробнее
                </Button>
                <Button size="small" color="primary">
                    Присоединиться
                </Button>
            </CardActions>
        </Card>
    );
}