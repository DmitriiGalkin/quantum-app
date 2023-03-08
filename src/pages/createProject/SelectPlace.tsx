import {makeStyles, Theme} from "@material-ui/core/styles";
import {CardActionArea, CardContent, Grid} from "@material-ui/core";
import React from "react";
import {usePlaces} from "../../modules/place/hook";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import {Project} from "../../modules/project/types";
import {Box} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
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
        <div>
            <Grid container spacing={2} alignItems="stretch">
                {places.map((place) =>
                    <Grid item lg={4} xs={12} key={place.id} onClick={() => {
                        setProject({ ...project, placeId: place.id })
                        handleNext()
                    }}>
                        <Box sx={{
                            flexGrow: 1,
                            backgroundColor: (theme) => project.placeId === place.id ? 'rgba(255,204,0,0.1)' : theme.palette.background.paper,
                        }}>
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
                        </Box>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}