import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import ProjectCard from "./cards/ProjectCard";
import {TabPanel} from "../tools/tabs";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';
import TaskCard from "./cards/TaskCard";
import AddMeetButton from "./buttons/AddMeetButton";
import AddProjectButton from "./buttons/AddProjectButton";
import {Meet, useMeets} from "../modules/meet";
import {useProjects} from "../modules/project";
import {useTasks} from "../modules/task";
import RocketIcon from '@mui/icons-material/Rocket';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import {useUserUniques} from "../modules/user";
import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Container,
    Paper,
    Typography,
    useTheme,
    Zoom
} from "@mui/material";

import DateMeets from "./cards/DateMeets";
import {getMeetsGroup} from "./helper";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: `${theme.spacing(4)}px ${theme.spacing(4)}px 0 0`,
    },
    bottomNavigation: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
    fabContainer: {
        position: 'absolute',
        top: 100,
        left: theme.spacing(2),
    },
}));
const FABS = [
    {
        component: <AddMeetButton/>,
        icon: <AddIcon />,
    },
    {
        component: <AddProjectButton/>,
        icon: <EditIcon />,
    }
];

export default function MainView() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };
    const { data: meets = [], refetch } = useMeets()
    const { data: projects = [] } = useProjects()
    const { data: tasks = [] } = useTasks()
    const { data: uniques = [] } = useUserUniques(1)
    const meetsGroup = getMeetsGroup(meets)
    const navigate = useNavigate();

    return (
        <div>
            <img src="/img.png" alt="мальчик" style={{ width: '90%' }}/>
            <div className={classes.content}>
                <TabPanel value={value} index={0}>
                    <Container disableGutters>
                        {meetsGroup.map(([date, meets]) => (
                            <DateMeets date={date} meets={meets as Meet[]} refetch={refetch}/>
                        ))}
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Container disableGutters>
                        {projects.map((project) => <ProjectCard {...project} onClick={() => navigate(`/project/${project.id}`)}/>)}
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Container disableGutters>
                        {tasks.map((task) => <TaskCard {...task} />)}
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Container disableGutters>
                        <div style={{ padding: 24 }}>
                            <Typography component="div" style={{ fontSize: 30, textAlign: 'center' }}>
                                Дмитрий Галкин
                            </Typography>
                            <Typography component="div" style={{ fontWeight: 700, textAlign: 'center' }}>
                                - твои Уникальные Ценности!
                            </Typography>
                        </div>
                        <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #E1E3E8',
                                borderRadius: 2,
                                padding: 2,
                                '& > * + *': {
                                    marginTop: 1,
                                }
                            }}
                        >
                            {uniques.map((unique) => (
                                <Box sx={{ display: 'flex' }}>
                                    <Typography variant="subtitle1" color="primary" style={{ flexGrow: 1 }}>
                                        {unique.title}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ paddingRight: 1}}>
                                        15
                                    </Typography>
                                    <AutoAwesomeIcon style={{ width: 20, height: 20 }} color="primary"/>
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </TabPanel>
                <img src="/img_1.png" alt="завитушки" style={{ width: '100%', display: 'block' }}/>
            </div>
            <Paper className={classes.bottomNavigation} elevation={3} style={{zIndex: 10 }}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    showLabels
                >
                    <BottomNavigationAction label="Встречи" icon={<GroupsIcon />} />
                    <BottomNavigationAction label="Проекты" icon={<RocketIcon />} />
                    <BottomNavigationAction label="Задания" icon={<EmojiEventsIcon />} />
                    <BottomNavigationAction label="Ценности" icon={<AutoAwesomeIcon />} />
                </BottomNavigation>
            </Paper>
            {FABS.map((fab, index) => (
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
