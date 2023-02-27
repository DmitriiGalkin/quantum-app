import {makeStyles, Theme} from "@material-ui/core/styles";
import {Card, CardActionArea, CardContent, Grid} from "@material-ui/core";
import ProjectCard from "../../../cards/ProjectCard";
import React from "react";
import {useProjects} from "../../../../modules/project/hook";
import {MeetStepProps} from "./types";
import {useUserProjects} from "../../../../modules/user/hook";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
}));

export default function SelectProjectStep({ meet, setMeet, handleNext }: MeetStepProps) {
    const classes = useStyles();
    const { data: projects = [] } = useUserProjects(1)

    return (
        <div className={classes.root}>
            <Grid container spacing={2} alignItems="stretch">
                {projects.map((project) =>
                    <Grid item lg={4} xs={12} key={project.id} onClick={() => {
                        setMeet({ ...meet, projectId: project.id })
                        handleNext()
                    }}>
                        <Card className={classes.root}>
                            <CardActionArea>
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
                        </Card>                    </Grid>
                )}
            </Grid>
        </div>
    );
}