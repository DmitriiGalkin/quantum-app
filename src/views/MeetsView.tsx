import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MeetCard from "./cards/MeetCard";
import {Box, Container, Grid, useTheme} from "@material-ui/core";
import ProjectCard from "./cards/ProjectCard";
import {TabPanel} from "../tools/tabs";
import {green} from '@material-ui/core/colors';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';
import SwipeableViews from 'react-swipeable-views';
import Zoom from '@material-ui/core/Zoom';
import TaskCard from "./cards/TaskCard";
import AddMeetButton from "./buttons/AddMeetButton";
import AddProjectButton from "./buttons/AddProjectButton";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";
import MapIcon from "@material-ui/icons/Map";
import {AccountCircle} from "@material-ui/icons";
import {useMeets} from "../modules/meet/hook";
import {useProjects} from "../modules/project/hook";
import {useTasks} from "../modules/task/hook";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        position: 'relative',
        minHeight: 200,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#C22157',
    },
    sectionDesktop: {
        display: 'flex',
    },
    fabContainer: {
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

    const { data: meets2 = [] } = useMeets()
    const { data: projects2 = [] } = useProjects()
    const { data: tasks = [] } = useTasks()

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            component: <AddMeetButton/>,
            icon: <AddIcon />,
        },
        {
            component: <AddProjectButton/>,
            icon: <EditIcon />,
        }
    ];

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Quantum
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="inherit" component={Link} to="/place">
                            <MapIcon />
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls='primary-search-account-menu'
                            aria-haspopup="true"
                            component={Link} to="/user/1"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <AppBar position="static" color="secondary">
                <Tabs value={value} onChange={handleChange} variant="fullWidth">
                    <Tab label="Встречи" />
                    <Tab label="Проекты" />
                    <Tab label="Задания" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                        <Typography variant="overline" component="p">
                            Сегодня
                        </Typography>
                        <Grid container spacing={2} alignItems="stretch">
                            {meets2.map((meet, index) =>                     <Grid item lg={4} xs={12} key={index}>
                                <MeetCard {...meet}  key={index}/></Grid>)}
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
                    <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                        <Grid container spacing={2} alignItems="stretch">
                            {tasks.map((task) =>
                                <Grid item lg={4} xs={12}>
                                    <TaskCard {...task} />
                                </Grid>)}
                        </Grid>
                    </Container>
                </TabPanel>
            </SwipeableViews>
            {fabs.map((fab, index) => (
                <Zoom
                    key={index}
                    in={value === index}
                    timeout={transitionDuration}
                    style={{ transitionDelay: `${value === index ? transitionDuration.exit : 0}ms` }}
                    unmountOnExit
                >
                    <Box className={classes.fabContainer}>
                        {fab.component}
                    </Box>
                </Zoom>
            ))}
        </div>
    );
}