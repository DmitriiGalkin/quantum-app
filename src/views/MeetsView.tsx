import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MeetCard from "./cards/MeetCard";
import {Container, Grid} from "@material-ui/core";
import PlaceCard from "./cards/PlaceCard";
import ProjectCard from "./cards/ProjectCard";
import ButtonAppBar from "../components/ButtonAppBar";
import {Outlet} from 'react-router-dom'
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Meet} from "../modules/meet/types";
import {Project} from "../modules/project/types";
import {Place} from "../modules/place/types";
import {a11yProps, TabPanel} from "../tools/tabs";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function MeetsView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const {data: meets2 = []} = useQuery<Meet[]>({
        queryKey: ['meets'],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/meets")
                .then((res) => res.data),
    })
    const {data: projects2 = []} = useQuery<Project[]>({
        queryKey: ['projects'],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/projects")
                .then((res) => res.data),
    })
    const {data: places = []} = useQuery<Place[]>({
        queryKey: ['places'],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/places")
                .then((res) => res.data),
    })

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <ButtonAppBar/>
            <AppBar position="static" color="secondary">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                    <Tab label="Встречи" {...a11yProps(0)} />
                    <Tab label="Проекты" {...a11yProps(2)} />
                    <Tab label="Места" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                    <Grid container spacing={2} alignItems="stretch">
                        {meets2.map((meet) =>                     <Grid item xs={4}>
                            <MeetCard {...meet} /></Grid>)}
                    </Grid>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                    <Typography variant="h2">
                        Проекты в которых участвую
                    </Typography>
                    <Grid container spacing={2} alignItems="stretch">
                        {projects2.filter((project) => project.active).map((project) =>                     <Grid item xs={3}>
                            <ProjectCard {...project} /></Grid>)}
                    </Grid>
                    <Typography variant="h2">
                        Проекты в которых не участвую
                    </Typography>
                    <Grid container spacing={2} alignItems="stretch">
                        {projects2.filter((project) => !project.active).map((project) =>                     <Grid item xs={3}>
                            <ProjectCard {...project} /></Grid>)}
                    </Grid>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                    <Grid container spacing={2}>
                        {places.map((g) =>                     <Grid item xs={3}>
                            <PlaceCard {...g} /></Grid>)}
                    </Grid>
                </Container>
            </TabPanel>
            <Outlet />
        </div>
    );
}