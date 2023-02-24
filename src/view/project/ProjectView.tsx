import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Avatar, Card, CardHeader, Container, Grid} from "@material-ui/core";
import ForwardBar from "../../components/ForwardBar";
import ProjectTimeline from "./ProjectTimeLine";
import ProjectInfo from "./ProjectInfo";
import {useProject} from "../../modules/project/hook";
import {useParams} from "react-router-dom";
import {useProjectUsers} from "../../modules/user/hook";
import {useQuery} from "@tanstack/react-query";
import {Project} from "../../modules/project/types";
import axios from "axios";

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
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function ProjectView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { id } = useParams();


    const {data: project = {} as Project } = useQuery<Project>({
        queryKey: ['projects'],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/projects/" + Number(id))
                .then((res) => res.data),
    })
    const users = useProjectUsers()

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <ForwardBar title={project.title}/>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Общее" {...a11yProps(0)} />
                    <Tab label="Встречи" {...a11yProps(1)} />
                    <Tab label="Участники" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                    <ProjectInfo {...project} />
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                    <ProjectTimeline/>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                    <Grid container spacing={3}>
                    {users.map((user) => (
                        <Grid item xs={12} sm={6}>
                            <Card>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            alt={user.title}
                                            src={user.image}
                                            className={classes.large}
                                        />
                                    }
                                    title={user.title}
                                    subheader="Вдохновитель"
                                />
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </TabPanel>
        </div>
    );
}