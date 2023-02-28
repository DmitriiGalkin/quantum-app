import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import {Avatar, Box, Button, Card, CardContent, CardHeader, Container, Grid, IconButton} from "@material-ui/core";
import ForwardAppBar from "./components/ForwardAppBar";
import {Link, useParams} from "react-router-dom";
import {Project} from "../modules/project/types";
import {useProject, useProjectMeets, useProjectUsers} from "../modules/project/hook";
import MeetCard, {formatter} from "./cards/MeetCard";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import {DateTimeFormatter, LocalDateTime} from "@js-joda/core";
import Image from "./components/Image";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    imageW: {
        position: 'relative',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    imageContainer: {
        width: '100%',
        paddingTop: '100%',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    container: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        }
    }
}));

export default function ProjectView() {
    const classes = useStyles();
    const { id } = useParams();
    const { data: project = {} as Project } = useProject(Number(id))
    const { data: meets = [] } = useProjectMeets(Number(id))
    const { data: users = [] } = useProjectUsers(Number(id))

    return (
        <div className={classes.root}>
            <ForwardAppBar title={project.title}/>
            <Container style={{ paddingTop: 20 }} className={classes.container}>
                <Image alt={project.title} src={`/${project.image}`}/>
                <Typography variant="h5">
                    {project.title}
                </Typography>
                <Card>
                    <CardContent>
                        <Typography variant="body1">
                            {project.title}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon />}
                        >
                            Участвовать в проекте
                        </Button>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton aria-label="previous">
                            <FavoriteIcon color={project.favorite ? 'primary' : undefined}/>
                        </IconButton>
                        <IconButton aria-label="next">
                            <ShareIcon />
                        </IconButton>
                    </div>
                </Card>
                <Card>
                    <CardHeader
                        title="Встречи"
                        subheader="3 встречи"
                    />
                    <CardContent>
                        <Grid container spacing={2} alignItems="stretch">
                            {meets.map((meet, index) => {
                                const localDateTime = LocalDateTime.parse(meet.datetime, formatter)
                                const date = localDateTime.format(DateTimeFormatter.ofPattern('dd.MM'))
                                const time = localDateTime.format(DateTimeFormatter.ofPattern('HH:mm'))

                                return ( <Grid item lg={4} xs={12} key={index}>
                                    <Typography variant="body1">
                                        {date}
                                    </Typography>
                                    <Typography variant="body2">
                                        {time}
                                    </Typography>
                                    <Typography variant="h6">
                                        {meet.title}
                                    </Typography>
                                </Grid>)
                            })}
                        </Grid>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader
                        title="Участники"
                        subheader="2 участника"
                    />
                    <CardContent>
                        <Grid container spacing={2}>
                            {users.map((user) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} component={Link} to={`/user/${user.id}`}>
                                    <Grid container spacing={2} alignItems="stretch">
                                        <Grid item xs={3}>
                                            <Avatar
                                                alt={user.title}
                                                src={`/${user.image}`}
                                                className={classes.large}
                                            />
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Typography variant="body1" component="p">
                                                {user.title}
                                            </Typography>
                                            <Typography variant="subtitle2" component="p">
                                                Вдохновитель
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}