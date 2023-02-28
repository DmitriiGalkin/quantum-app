import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Project} from "../../modules/project/types";
import {Button, CardActionArea, Grid, IconButton} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import {Link} from "react-router-dom";
import {useAddProjectUser, useDeleteProjectUser, useProjectUsers} from "../../modules/project/hook";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '1px solid #E1E3E8',
            borderRadius: 24,
            padding: 16,
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            height: 75,
            borderRadius: 24,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
        title: {
            paddingTop: theme.spacing(1),
        },
    }),
);

export default function ProjectCard(project: Project) {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>
            {project.title}
        </Typography>
        <div style={{ display: 'flex' }}>
            <div>
                <img
                    className={classes.cover}
                    src={`/${project.image}`}
                    title={project.title}
                />
            </div>
            <div style={{ paddingLeft: 24 }}>
                <Typography color="textSecondary" component={Link} to={`/project/${project.id}`}>
                    {project.description}
                </Typography>
            </div>
        </div>
    </div>
    );
}