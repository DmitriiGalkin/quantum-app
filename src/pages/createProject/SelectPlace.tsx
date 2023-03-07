import {makeStyles, Theme} from "@material-ui/core/styles";
import {Card, CardActionArea, CardContent, Grid} from "@material-ui/core";
import React from "react";
import {usePlaces} from "../../modules/place/hook";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import {Project} from "../../modules/project/types";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
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
}));

export default function SelectPlace({ project, handleNext, setProject }: {project: Project, handleNext: () => void, setProject: (project: Project) => void }) {
    const classes = useStyles();
    const { data: places = [] } = usePlaces()

    return (
        <div className={classes.root}>
            <Grid container spacing={2} alignItems="stretch">
                {places.map((place) =>
                    <Grid item lg={4} xs={12} key={place.id} onClick={() => {
                        setProject({ ...project, placeId: place.id })
                        handleNext()
                    }}>
                        <Card className={classes.root}>
                            <CardActionArea>
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
                    </Grid>
                )}
            </Grid>
        </div>
    );
}