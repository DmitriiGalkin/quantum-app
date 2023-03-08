import React from 'react';

import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';
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
} from "@mui/material";

import {Outlet, useNavigate} from "react-router-dom";
import {useAuth} from "../tools/hooks";
import QBottomNavigation from "../components/QBottomNavigation";
import {makeStyles, Theme} from "@material-ui/core/styles";

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
                        <ListItem disablePadding>
                            <ListItemButton onClick={map} >
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Карта'} />
                            </ListItemButton>
                        </ListItem>
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
