import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import {Container} from "@material-ui/core";
import {Skeleton} from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 16px',
        },
        menuButton: {
            padding: 0,
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
        <Container maxWidth="sm">
            <div className={classes.root}>
                <div style={{ display: 'flex' }}>
                    <IconButton edge="start" className={classes.menuButton} onClick={() => window.history.back()}>
                        <ArrowBackIos color="primary"/>
                    </IconButton>
                    <Typography className={classes.title} style={{ fontSize: 18, lineHeight: '23px' }}>
                        {title || <Skeleton variant="text" sx={{ fontSize: '1rem' }} />}
                    </Typography>
                </div>
                <div>34</div>
            </div>
        </Container>

    );
}
