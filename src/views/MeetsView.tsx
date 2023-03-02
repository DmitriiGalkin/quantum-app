import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MeetCard from "./cards/MeetCard";
import {Box, Container, Grid, Paper, useTheme} from "@material-ui/core";
import ProjectCard from "./cards/ProjectCard";
import {TabPanel} from "../tools/tabs";
import {green} from '@material-ui/core/colors';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';
import Zoom from '@material-ui/core/Zoom';
import TaskCard from "./cards/TaskCard";
import AddMeetButton from "./buttons/AddMeetButton";
import AddProjectButton from "./buttons/AddProjectButton";
import {useMeets} from "../modules/meet/hook";
import {useProjects} from "../modules/project/hook";
import {useTasks} from "../modules/task/hook";
import RocketIcon from '@mui/icons-material/Rocket';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {DateTimeFormatter, LocalDate, LocalDateTime} from "@js-joda/core";
import {formatter} from "../tools/date";
import {useUserUniques} from "../modules/user/hook";
import {Divider, BottomNavigation, BottomNavigationAction, Chip} from "@mui/material";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

import DateMeets from "./cards/DateMeets";
import {Meet} from "../modules/meet";

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
    root22: {
        border: '1px solid #E1E3E8',
        borderRadius: 12,
        padding: 12,
        '& > * + *': {
            marginTop: 8,
        }
    },
}));//

export const formatter2 = DateTimeFormatter.ofPattern('yyyy-MM-dd');

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

    return (
        <>
            <img src="/img.png" alt="мальчик" style={{ width: '90%' }}/>
            <div className={classes.content}>
                    <TabPanel value={value} index={0}>
                        <Container maxWidth="lg" style={{ padding: '0 0 0 8px' }} className={classes.container}>
                        {meetsGroup.map(([date, meets]) => (
                            <DateMeets date={date} meets={meets as Meet[]} refetch={refetch}/>
                        ))}
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Container maxWidth="lg" style={{ padding: 0 }}>

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
                        <Container maxWidth="lg" style={{ padding: 0 }}>
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
                        <Container maxWidth="lg" style={{ padding: 0 }}>
                            <div style={{ padding: 24 }}>
                                <Typography component="div" style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 30, lineHeight: '32px', textTransform: 'uppercase', textAlign: 'center', color: '#313131' }}>
                                    Дима Галкин,
                                </Typography>
                                <Typography component="div" style={{ fontSize: 15, lineHeight: '21px', fontFamily: 'Source Sans Pro', fontWeight: 700, textAlign: 'center', color: '#313131' }}>
                                    у тебя Уникальные Ценности!
                                </Typography>
                            </div>
                        <Box className={classes.root22} sx={{ display: 'flex', flexDirection: 'column' }}>
                            {uniques.map((unique) => (
                                <Box style={{ display: 'flex' }}>
                                    <Typography component="div" style={{ flexGrow: 1, fontSize: 14, lineHeight: '18px', fontFamily: 'Source Sans Pro', fontWeight: 400 }}>
                                        {unique.title}
                                    </Typography>
                                    <AutoAwesomeIcon style={{ width: 20, height: 20 }}/>
                                    <Typography component="div" style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'Source Sans Pro', fontWeight: 700, paddingLeft: 6 }}>
                                        15
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                        </Container>
                    </TabPanel>
                <img src="/img_1.png" alt="мальчик" style={{ width: '100%', display: 'block' }}/>
                <div style={{ height: 56 }}/>
            </div>
            <Paper className={classes.bottomNavigation} elevation={3} style={{zIndex: 10 }}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="Встречи" icon={<GroupsIcon />} />
                    <BottomNavigationAction label="Проекты" icon={<RocketIcon />} />
                    <BottomNavigationAction label="Задания" icon={<EmojiEventsIcon />} />
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