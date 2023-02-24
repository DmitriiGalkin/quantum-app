import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Chip, Container, Grid} from "@material-ui/core";
import ForwardBar from "../../components/ForwardBar";
import {a11yProps, TabPanel} from "../../tools/tabs";
import FaceIcon from "@material-ui/icons/Face";
import {Project} from "../../modules/project/types";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Place} from "../../modules/place/types";
import ProjectCard from "../main/ProjectCard";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    root2: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function PlaceView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { id } = useParams();

    const {data: place = {} as Place } = useQuery<Project>({
        queryKey: ['place'],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/places/" + Number(id))
                .then((res) => res.data),
    })
    const {data: projects = [] } = useQuery<Project[]>({
        queryKey: ['projects'],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/projects/", { params: { placeId: Number(id) }})
                .then((res) => res.data),
    })
    //
    console.log(projects, 'projects')

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <ForwardBar title={place.title}/>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="О месте" {...a11yProps(0)} />
                    <Tab label="Проекты" {...a11yProps(1)} />
                    <Tab label="Участники" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                    <div className={classes.root2}>
                        <Chip variant="outlined" size="small" icon={<FaceIcon />} label="Deletable" />
                    </div>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                    <Grid container spacing={2} alignItems="stretch">
                        {projects.map((project) =>                     <Grid item xs={3}>
                            <ProjectCard {...project} /></Grid>)}
                    </Grid>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                    Список участников группы
                </Container>
            </TabPanel>
        </div>
    );
}