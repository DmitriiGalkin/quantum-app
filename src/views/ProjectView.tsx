import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import {Avatar, Button, Card, CardContent, CardHeader, Container, Grid, IconButton} from "@material-ui/core";
import ForwardAppBar from "./components/ForwardAppBar";
import {Link, useParams} from "react-router-dom";
import {Project} from "../modules/project/types";
import {
    useAddProjectUser,
    useDeleteProjectUser,
    useProject,
    useProjectMeets,
    useProjectUsers
} from "../modules/project/hook";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import {DateTimeFormatter, LocalDateTime} from "@js-joda/core";
import Image from "./components/Image";
import {formatter} from "../tools/date";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
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
        backgroundColor: theme.palette.background.paper,
        borderRadius: `${theme.spacing(4)}px ${theme.spacing(4)}px 0 0`,
    },
    content: {
        padding: '24px 0',
        '& > * + *': {
            marginTop: theme.spacing(2),
        }
    },
    root55: {
        border: '1px solid #E1E3E8',
        borderRadius: 12,
        padding: 12,
    },
}));

export default function ProjectView() {
    const classes = useStyles();
    const { id } = useParams();
    const { data: project = {} as Project } = useProject(Number(id))
    const { data: meets = [] } = useProjectMeets(Number(id))
    const { data: users = [], refetch } = useProjectUsers(Number(id))
    const mutation = useAddProjectUser()
    const mutation2 = useDeleteProjectUser()
    const active = users.map((user) => user.id).includes(1)

    const onClick = () => {
        if (active) {
            mutation2.mutate({ projectId: project.id })
            refetch()
        } else {
            mutation.mutate({ projectId: project.id })
            refetch()
        }
    }

    return (
        <div className={classes.root}>
            <ForwardAppBar title={project.title}/>
            <div style={{ height: 24 }}></div>
            <div className={classes.container}>
                <Image alt={project.title} src={`/${project.image}`} borderRadius={'24px 24px 0 0'} />
                <Container className={classes.content}>
                    <div>
                        <Typography  style={{ fontSize: 16, lineHeight: '23px', fontFamily: 'Source Sans Pro', fontWeight: 700 }}>
                            {project.title}
                        </Typography>
                        <Typography  style={{ fontSize: 13, lineHeight: '22px', fontFamily: 'Source Sans Pro', fontWeight: 400 }}>
                            {project.description}
                        </Typography>
                    </div>
                    <div className={classes.root55}>
                        <CardContent>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<SaveIcon />}
                                onClick={onClick}
                            >
                                {active ? 'Покинуть проект' : 'Участвовать в проекте'}
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
                    </div>
                    <div className={classes.root55}>
                        <Typography  style={{ fontSize: 16, lineHeight: '23px', fontFamily: 'Source Sans Pro', fontWeight: 700 }}>
                            Встречи
                        </Typography>
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
                    </div>
                    <div className={classes.root55}>
                        <Typography  style={{ fontSize: 16, lineHeight: '23px', fontFamily: 'Source Sans Pro', fontWeight: 700 }}>
                            Участники
                        </Typography>
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
                    </div>
                </Container>
            </div>
        </div>
    );
}