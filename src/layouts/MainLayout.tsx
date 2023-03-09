import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MapIcon from '@mui/icons-material/Map';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentInd from '@mui/icons-material/AssignmentInd';

import {
    AppBar,
    Box, Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Theme
} from "@mui/material";

import {Outlet, useNavigate} from "react-router-dom";
import {useAuth} from "../tools/hooks";
import QBottomNavigation from "../components/QBottomNavigation";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: `${theme.spacing(4)}px ${theme.spacing(4)}px 0 0`,
    },
}));

export default function MainView() {
    const classes = useStyles();

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const { logout } = useAuth();

    const map = () => {
        navigate('/map')
    }

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
                        СВОЙ ПРОЕКТ
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
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/user/1')} >
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Профиль'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={map} >
                                <ListItemIcon>
                                    <MapIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Карта'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/user/1/edit')}>
                                <ListItemIcon>
                                    <AssignmentInd />
                                </ListItemIcon>
                                <ListItemText primary='Настройки' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem key={'logout'} disablePadding>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary='logout' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <img src="/img.png" alt="мальчик" style={{ width: '90%' }}/>
            <div className={classes.content}>
                <Box p={3}>
                    <Container disableGutters>
                        <Outlet />
                    </Container>
                </Box>
            </div>
            <QBottomNavigation/>
        </div>
    );
}
