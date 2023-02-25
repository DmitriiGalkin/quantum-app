import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import {Avatar, Card, CardHeader, Container, Grid, Box, CardContent, Button} from "@material-ui/core";
import ForwardAppBar from "./components/ForwardAppBar";
import {useParams} from "react-router-dom";
import {Project} from "../modules/project/types";
import {useProject, useProjectUsers, useProjectMeets} from "../modules/project/hook";
import MeetCard from "./cards/MeetCard";

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
            <Container style={{ paddingTop: 20 }}>
                <Box className={classes.imageW}>
                    <Box className={classes.imageContainer}>
                        <img alt="The house from the offer." src={`/${project.image}`}  className={classes.image}/>
                    </Box>
                </Box>
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
                </Card>
                <Card>
                    <CardHeader
                        title="Встречи"
                        subheader="3 встречи"
                    />
                    <CardContent>
                        <Grid container spacing={2} alignItems="stretch">
                            {meets.map((meet, index) =>
                                <Grid item lg={4} xs={12} key={index}>
                                    <MeetCard {...meet}  key={index}/>
                                </Grid>
                            )}
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
                                <Grid item xs={12} sm={6} md={4} lg={3}>
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