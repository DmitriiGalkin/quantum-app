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

export default function ModalLayout() {
    return (
        <Outlet />
    );
}
