import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import RocketIcon from "@mui/icons-material/Rocket";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    bottomNavigation: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
}));

export default function QBottomNavigation({ value }: {value: number}) {
    const classes = useStyles();
    const navigate = useNavigate();
    const onChange = (index: number) => {
        switch (index) {
            case 0:
            default:
                return navigate('/meets')
            case 1:
                return navigate('/projects')
            case 2:
                return navigate('/tasks')
            case 3:
                return navigate('/uniques')
        }
    }

    return (
        <Paper className={classes.bottomNavigation} elevation={3} style={{zIndex: 10 }}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => onChange(newValue)}
                showLabels
            >
                <BottomNavigationAction label="Встречи" icon={<GroupsIcon />} />
                <BottomNavigationAction label="Проекты" icon={<RocketIcon />} />
                <BottomNavigationAction label="Задания" icon={<EmojiEventsIcon />} />
                <BottomNavigationAction label="Ценности" icon={<AutoAwesomeIcon />} />
            </BottomNavigation>
        </Paper>
    )
}