import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MeetCard from "./MeetCard";
import {Container, Grid} from "@material-ui/core";
import GroupCard from "./GroupCard";
import ProjectCard from "./ProjectCard";
import ButtonAppBar from "../../components/ButtonAppBar";
import {Outlet} from 'react-router-dom'
import {useGroups} from "../../modules/group/hook";
import {useProjects} from "../../modules/project/hook";
import {useMeets} from "../../modules/meet/hook";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function MainView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const groups = useGroups()
    const projects = useProjects()
    const meets = useMeets()

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <ButtonAppBar/>
            <AppBar position="static" color="secondary">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Встречи" {...a11yProps(0)} />
                    <Tab label="Проекты" {...a11yProps(0)} />
                    <Tab label="Места" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                    <Grid container spacing={2} alignItems="stretch">
                        {meets.map((meet) =>                     <Grid item xs={4}>
                            <MeetCard {...meet} /></Grid>)}
                    </Grid>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                    <Typography variant="h2">
                        Мои проекты
                    </Typography>
                    <Grid container spacing={2} alignItems="stretch">
                        {projects.filter((project) => project.active).map((project) =>                     <Grid item xs={3}>
                            <ProjectCard {...project} /></Grid>)}
                    </Grid>
                    <Typography variant="h2">
                        Проекты мест
                    </Typography>
                    <Grid container spacing={2} alignItems="stretch">
                        {projects.filter((project) => !project.active).map((project) =>                     <Grid item xs={3}>
                            <ProjectCard {...project} /></Grid>)}
                    </Grid>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                    <Grid container spacing={2}>
                        {groups.map((g) =>                     <Grid item xs={3}>
                            <GroupCard {...g} /></Grid>)}
                    </Grid>
                </Container>
            </TabPanel>
            <Outlet />
        </div>
    );
}