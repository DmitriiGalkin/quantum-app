import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MeetCard2, {formatter} from "./cards/MeetCard2";
import {Box, Container, Grid, Paper, useTheme} from "@material-ui/core";
import ProjectCard2 from "./cards/ProjectCard2";
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
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import RocketIcon from '@mui/icons-material/Rocket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {DateTimeFormatter, LocalDate, LocalDateTime} from "@js-joda/core";


const useStyles = makeStyles((theme: Theme) => ({
    title: {
        flexGrow: 1,
    },
    content: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 32,
    },
    fabContainer: {
        position: 'fixed',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
    bottomNavigation: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
    meetsGroup: {
        display: 'flex',
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
        '& > * + *': {
            marginLeft: theme.spacing(2),
        }
    },
    meets: {
        '& > * + *': {
            borderTop: '1px solid #DBDBDB',
        }
    },
    meet: {
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    },
}));

export const formatter2 = DateTimeFormatter.ofPattern('yyyy-MM-dd');

const m = {
    0: 'ЯНВ',
    1: 'ФЕВ',
    2: 'МАР',
    3: 'АПР',
    4: 'МАЙ',
}
const getMonth = (n: number) => Object.values(m)[n]

export function groupBy<K, V>(list: Array<V>, keyGetter: (input: V) => K): Map<K, Array<V>> {
   const map = new Map<K, Array<V>>();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}
export default function MeetsView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();

    const { data: meets = [] } = useMeets()
    const { data: projects = [] } = useProjects()
    const { data: tasks = [] } = useTasks()

    const meetsGroup = [...Array.from(groupBy(meets, (meet) => {
        const localDateTime = LocalDateTime.parse(meet.datetime, formatter)
        const date = localDateTime.format(formatter2)
        return date
    }))];

    console.log(meetsGroup, 'meetsGroup')
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
        <>
            <img src="/img.png" alt="мальчик" style={{ width: '90%' }}/>
            <div className={classes.content}>
                <SwipeableViews
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0}>
                        {meetsGroup.map(([date, meets]) => {
                            const localDate = LocalDate.parse(date)
                            return (
                                <div className={classes.meetsGroup} key={date}>
                                    <div>
                                        <Typography style={{ fontSize: 28 }} component="span">
                                            {localDate.dayOfMonth()}
                                        </Typography>
                                        <Typography>
                                            {getMonth(localDate.monthValue())}
                                        </Typography>
                                    </div>
                                    <div style={{ flexGrow: 1, borderTop: '1px solid #DBDBDB' }}>
                                        <Grid container spacing={1} key={date} className={classes.meets}>
                                            {meets.map((meet) =>
                                                <Grid item lg={4} xs={12} key={meet.id} className={classes.meet}>
                                                    <MeetCard2 {...meet} />
                                                </Grid>
                                            )}
                                        </Grid>
                                    </div>
                                </div>
                            )
                        })}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={2}>
                            {projects.map((project) =>
                                <Grid item lg={4} xs={12} key={project.id}>
                                    <ProjectCard2 {...project} />
                                </Grid>
                            )}
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Grid container spacing={2}>
                            {tasks.map((task) =>
                                <Grid item lg={4} xs={12} key={task.id}>
                                    <TaskCard {...task} />
                                </Grid>
                            )}
                        </Grid>
                    </TabPanel>
                </SwipeableViews>
                <img src="/img_1.png" alt="мальчик" style={{ width: '100%', display: 'block' }}/>
                <div style={{ height: 56 }}/>
            </div>
            <Paper className={classes.bottomNavigation} elevation={3}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="Встречи" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Проекты" icon={<RocketIcon />} />
                    <BottomNavigationAction label="Задания" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="Профиль" icon={<AccountCircle />} />
                </BottomNavigation>
            </Paper>
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
        </>
    );
}