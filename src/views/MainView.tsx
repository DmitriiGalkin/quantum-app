import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import ProjectCard from "./components/ProjectCard";
import {TabPanel} from "../tools/tabs";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';
import TaskCard from "./components/TaskCard";
import {Meet, useMeets} from "../modules/meet";
import {useProjects} from "../modules/project";
import {useTasks} from "../modules/task";
import RocketIcon from '@mui/icons-material/Rocket';
import GroupsIcon from '@mui/icons-material/Groups';
import InboxIcon from '@mui/icons-material/Inbox';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import {useEditUser, useUser, useUserUniques} from "../modules/user";
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Container, Divider, Drawer, Fab, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Paper, Toolbar,
    Typography,
    useTheme,
    Zoom
} from "@mui/material";

import DateMeets from "./components/DateMeets";
import {getMeetsGroup} from "./helper";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../tools/hooks";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import {useEditUnique} from "../modules/unique";

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
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


export default function MainView() {
    const classes = useStyles();
    const theme = useTheme();
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const { user, logout } = useAuth();

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };
    const { data: userD } = useUser(1)
    const { data: meets = [], refetch } = useMeets()
    const { data: projects = [] } = useProjects()
    const { data: tasks = [] } = useTasks()
    const { data: uniques = [] } = useUserUniques(1)
    const meetsGroup = getMeetsGroup(meets)

    const editUser = useEditUser(1)
    const editUnique = useEditUnique(1)

    const toTop = ({ user, unique, points }: any) => {
        editUser.mutate({ ...user, points: user.points - points })
        editUnique.mutate({ ...unique, points: unique.points + points })
    }

    const FABS = [
        {
            component: <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => navigate(`/meet`)}>
                <AddIcon className={classes.extendedIcon} />
            </Fab>,
            icon: <AddIcon />,
        },
        {
            component: <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => navigate(`/project`)}>
                <AddIcon className={classes.extendedIcon} />
            </Fab>,
            icon: <EditIcon />,
        }
    ];

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Quantum
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box
                    role="presentation"
                    onClick={()=> setOpen(false)}
                >
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                            <ListItem key={'logout'} disablePadding>
                                <ListItemButton onClick={logout}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='logout' />
                                </ListItemButton>
                            </ListItem>
                    </List>
                </Box>
            </Drawer>
            <img src="/img.png" alt="мальчик" style={{ width: '90%' }}/>
            <div className={classes.content}>
                <TabPanel value={value} index={0}>
                    <Container disableGutters>
                        {meetsGroup.map(([date, meets]) => (
                            <DateMeets key={date} date={date} meets={meets as Meet[]}/>
                        ))}
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Container disableGutters>
                        {projects.map((project) => <ProjectCard key={project.id} {...project} onClick={() => navigate(`/project/${project.id}`)}/>)}
                        <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #E1E3E8',
                            borderRadius: 2,
                            padding: 2,
                            marginBottom: 2,
                        }}>
                            Список релевантных проектов: новые проекты, проекты поблизости, проекты по схожим тегам, проекты по схожим пространствам
                        </Box>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Container disableGutters>
                        {tasks.map((task) => <TaskCard key={task.id} {...task} />)}
                        <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #E1E3E8',
                            borderRadius: 2,
                            padding: 2,
                            marginBottom: 2,
                        }}>
                            Новых заданий нет, - задания появляются со временем или после продвижения проектов
                        </Box>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Container disableGutters>
                        <div style={{ padding: 24 }}>
                            <Typography component="div" style={{ fontSize: 30, textAlign: 'center' }}>
                                {userD?.title}
                            </Typography>
                            <Typography component="div" style={{ fontWeight: 700, textAlign: 'center' }}>
                                - твои Уникальные Ценности!
                            </Typography>
                            <Typography component="div" style={{ fontWeight: 700, textAlign: 'center' }}>
                                Свободных баллов {userD?.points ? userD?.points : 'нет'}
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
                                <Box key={unique.id} sx={{ display: 'flex' }}>
                                    <Typography variant="subtitle1" color="primary" style={{ flexGrow: 1 }}>
                                        {unique.title}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ paddingRight: 1}}>
                                        {unique.points}
                                    </Typography>
                                    <AutoAwesomeIcon style={{ width: 20, height: 20 }} color="primary"/>
                                    {userD?.points && <IconButton onClick={() => toTop({ user: userD, unique, points: 1 })}>
                                        <ArrowUpward/>
                                    </IconButton>}
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
