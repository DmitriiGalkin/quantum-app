import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Project} from "../../modules/project/types";
import {Button, CardActionArea, Grid, IconButton} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import {Link} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            height: 0,
            paddingTop: '156.25%', // 16:9
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
 //             <CardActionArea component={Link} to={`/project/${project.id}`} className={classes.root2}>
    return (
    <Card className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <CardMedia
                    className={classes.cover}
                    image={`/${project.image}`}
                    title={project.title}
                />
            </Grid>
            <Grid item xs={9}>
                <div className={classes.details}>
                    <CardActionArea component={Link} to={`/project/${project.id}`}>
                        <Typography variant="h6" className={classes.title}>
                            {project.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {project.description}
                        </Typography>
                    </CardActionArea>
                    <div className={classes.controls}>
                        <IconButton aria-label="previous">
                            <FavoriteIcon color={project.favorite ? 'primary' : undefined}/>
                        </IconButton>
                        <Button size="small" color="primary"
                        >
                            Присоединиться
                        </Button>
                        <IconButton aria-label="next">
                            <ShareIcon />
                        </IconButton>
                    </div>
                </div>
            </Grid>
        </Grid>
    </Card>
    );
}