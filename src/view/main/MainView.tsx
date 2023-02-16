import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GameView from "./GameCard";
import {Container} from "@material-ui/core";
import GroupCard from "./GroupCard";
import ProjectCart from "./ProjectCard";
import ButtonAppBar from "../../components/ButtonAppBar";
import { Outlet } from 'react-router-dom'

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
                <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                    <GameView/>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                    <ProjectCart/>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                    <GroupCard/>
                </Container>
            </TabPanel>
            <Outlet />
        </div>
    );
}