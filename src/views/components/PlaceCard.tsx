import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import {Place} from "../../modules/place/types";
import {CardActionArea} from "@material-ui/core";
import {Link} from "react-router-dom";

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

export default function PlaceCard(place: Place) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to={`/place/${place.id}`}>
                <CardMedia
                    className={classes.media}
                    image={place.image}
                    title={place.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {place.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {place.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}