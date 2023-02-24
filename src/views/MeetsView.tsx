import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MeetCard from "./cards/MeetCard";
import {Container, Grid, useTheme} from "@material-ui/core";
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
import MapIcon from '@material-ui/icons/Map';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { green } from '@material-ui/core/colors';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import clsx from "clsx";
import SwipeableViews from 'react-swipeable-views';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        position: 'relative',
        minHeight: 200,
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}));

export default function MeetsView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();

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

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary' as 'primary',
            className: classes.fab,
            icon: <AddIcon />,
            label: 'Add',
        },
        {
            color: 'secondary' as 'secondary',
            className: classes.fab,
            icon: <EditIcon />,
            label: 'Edit',
        },
        {
            color: 'inherit' as 'inherit',
            className: clsx(classes.fab, classes.fabGreen),
            icon: <UpIcon />,
            label: 'Expand',
        },
    ];

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <ButtonAppBar/>
            <AppBar position="static" color="secondary">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                    <Tab label="Встречи" {...a11yProps(0)} />
                    <Tab label="Проекты" {...a11yProps(1)} />
                    <Tab label="Задания" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                        <Typography component="h6" variant="h6">
                            Сегодня
                        </Typography>
                        <Grid container spacing={2} alignItems="stretch">
                            {meets2.map((meet) =>                     <Grid item lg={4} xs={12}>
                                <MeetCard {...meet} /></Grid>)}
                        </Grid>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                        <Grid container spacing={2} alignItems="stretch">
                            {projects2.filter((project) => !project.active).map((project) =>                     <Grid item lg={4} xs={12}>
                                <ProjectCard {...project} /></Grid>)}
                        </Grid>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={2}>
    34
                </TabPanel>
            </SwipeableViews>
            {fabs.map((fab, index) => (
                <Zoom
                    key={fab.color}
                    in={value === index}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                    }}
                    unmountOnExit
                >
                    <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
                        {fab.icon}
                    </Fab>
                </Zoom>
            ))}
        </div>
    );
}