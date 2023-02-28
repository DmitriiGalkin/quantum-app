import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 16px',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: theme.palette.background.paper,
        },
    }),
);

export default function ForwardAppBar({ title }: { title?: string }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ display: 'flex' }}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={() => window.history.back()}>
                    <ArrowBackIos />
                </IconButton>
                <Typography className={classes.title}>
                    {title || 'Quantum'}
                </Typography>
            </div>
            <div>34</div>
        </div>
    );
}
