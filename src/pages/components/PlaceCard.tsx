import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import {Place} from "../../modules/place/types";
import {CardActionArea} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Box} from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
interface PlaceCardProps extends Place {
    selected?: boolean
}
export default function PlaceCard(place: PlaceCardProps) {
    const classes = useStyles();

    return (
        <Box sx={{
            backgroundColor: place.selected ? 'rgba(255,204,0,0.1)' : undefined
        }}>
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
        </Box>
    );
}