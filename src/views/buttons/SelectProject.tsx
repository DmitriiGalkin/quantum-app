import {makeStyles, Theme} from "@material-ui/core/styles";
import {Card, CardContent, CardHeader, Container, Grid} from "@material-ui/core";
import ProjectCard from "../cards/ProjectCard";
import React from "react";
import {useProjects} from "../../modules/project/hook";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function SelectProject({ handleNext }: {handleNext: () => void }) {
    const classes = useStyles();
    const { data: projects = [] } = useProjects()

    return (
        <div className={classes.root}>
            <Grid container spacing={2} alignItems="stretch">
                {projects.map((project) =>
                    <Grid item lg={4} xs={12} key={project.id} onClick={handleNext}>
                        <ProjectCard {...project}  key={project.id}/>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}