import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MeetCard from "./cards/MeetCard";
import {Box, Container, Grid, Paper, useTheme} from "@material-ui/core";
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
import {useMeets} from "../modules/meet/hook";
import {useProjects} from "../modules/project/hook";
import {useTasks} from "../modules/task/hook";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RocketIcon from '@mui/icons-material/Rocket';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {DateTimeFormatter, LocalDate, LocalDateTime} from "@js-joda/core";
import {formatter} from "../tools/date";
import {useUserUniques} from "../modules/user/hook";
import {Divider} from "@mui/material";


const useStyles = makeStyles((theme: Theme) => ({
    title: {
        flexGrow: 1,
    },
    content: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: `${theme.spacing(4)}px ${theme.spacing(4)}px 0 0`,
    },
    fabContainer: {
        position: 'absolute',
        top: 100,
        left: theme.spacing(2),
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
        // '& > * + *': {
        //     borderTop: '1px solid #DBDBDB',
        // }
    },
    meet: {
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    },
    date: {
        position: 'sticky',
        top: 0,
        padding: '12px 0',
        textAlign: 'center',
    },
    container: {
        // '& > div + div ': {
        //     borderTop: '1px solid #DBDBDB',
        // }
    },
}));//

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

    const { data: meets = [], refetch } = useMeets()
    const { data: projects = [] } = useProjects()
    const { data: tasks = [] } = useTasks()
    const { data: uniques = [] } = useUserUniques(1)

    const meetsGroup = [...Array.from(groupBy(meets, (meet) => {
        const localDateTime = LocalDateTime.parse(meet.datetime, formatter)
        const date = localDateTime.format(formatter2)
        return date
    }))];

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
                    <TabPanel value={value} index={0}>
                        <Container maxWidth="lg" style={{ padding: '24px 16px 24px 32px' }} className={classes.container}>
                        {meetsGroup.map(([date, meets], index) => {
                            const localDate = LocalDate.parse(date)
                            return (
                                <>
                                    {Boolean(index) && <Divider light />}
                                    <div className={classes.meetsGroup} key={date}>
                                        <div>
                                            <div className={classes.date}>
                                                <Typography style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 26, lineHeight: '28px' }} component="span">
                                                    {localDate.dayOfMonth()}
                                                </Typography>
                                                <Typography style={{ fontSize: 13, lineHeight: '19px', fontFamily: 'Source Sans Pro', fontWeight: 700 }}>
                                                    {getMonth(localDate.monthValue())}
                                                </Typography>
                                            </div>
                                        </div>
                                        <div style={{ flexGrow: 1 }}>
                                            <div>
                                                {meets.map((meet, index) =>
                                                    <>
                                                        {Boolean(index) && <Divider light variant="middle" />}
                                                        <div key={meet.id}>
                                                            <MeetCard {...meet} refetch={refetch} />
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                        })}
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Container maxWidth="lg" style={{ padding: 16 }}>

                        <Grid container spacing={2}>
                            {projects.map((project) =>
                                <Grid item lg={4} xs={12} key={project.id}>
                                    <ProjectCard {...project} />
                                </Grid>
                            )}
                        </Grid>
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Container maxWidth="lg" style={{ padding: 16 }}>
                        <Grid container spacing={2}>
                            {tasks.map((task) =>
                                <Grid item lg={4} xs={12} key={task.id}>
                                    <TaskCard {...task} />
                                </Grid>
                            )}
                        </Grid>
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Container maxWidth="lg" style={{ padding: '24px 32px' }}>
                        <Grid container spacing={2}>
                            {uniques.map((unique) => (
                                <Grid item xs={12}>
                                    <Typography variant="body1">
                                        {unique.title}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                        </Container>
                    </TabPanel>
                <img src="/img_1.png" alt="мальчик" style={{ width: '100%', display: 'block' }}/>
                <div style={{ height: 56 }}/>
            </div>
            <Paper className={classes.bottomNavigation} elevation={3} style={{zIndex: 1 }}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="Встречи" icon={<GroupsIcon />} />
                    <BottomNavigationAction label="Проекты" icon={<RocketIcon />} />
                    <BottomNavigationAction label="Задания" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="Ценности" icon={<AutoAwesomeIcon />} />
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