import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Card, CardActionArea, CardContent, CardHeader, Container, Grid} from "@material-ui/core";
import ForwardAppBar from "./components/ForwardAppBar";
import Image from "./components/Image";
import {Link, useParams} from "react-router-dom";
import {User} from "../modules/user/types";
import {useUser, useUserProjects, useUserUniques} from "../modules/user/hook";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
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
    title: {
        paddingTop: theme.spacing(1),
    },
}));

export default function UserView() {
    const classes = useStyles();
    const { id } = useParams();
    const { data: user = {} as User } = useUser(Number(id))
    const { data: uniques = [] } = useUserUniques(Number(id))
    const { data: projects = [] } = useUserProjects(Number(id))

    return (
        <div className={classes.root}>
            <ForwardAppBar title={user.title}/>
            <Container style={{ paddingTop: 20 }}>
                <Image alt={user.title} src={`/${user.image}`}/>
                <Typography variant="h5">
                    {user.title}
                </Typography>
                <Grid container spacing={5} justify="center">
                    <Grid item>
                        <Card>
                            <CardHeader
                                title="Уникальные ценности"
                                subheader="Вдохновитель нового"
                            />
                            <CardContent>
                                <Grid container spacing={2} alignItems="stretch">
                                    {uniques.map((unique) => (
                                        <Grid item xs={12}>
                                            <Typography variant="body1">
                                                {unique.title}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardHeader
                                title="Участие в проектах"
                                subheader="3 проекта"
                            />
                            <CardContent>
                                <Grid container spacing={2} alignItems="stretch">
                                    {projects.map((project) =>
                                        <Grid item lg={4} xs={12} key={project.id}>
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
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    )}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}