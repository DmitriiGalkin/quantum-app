import React from 'react';
import {createStyles} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles, Theme} from "@material-ui/core/styles";
import CreateProjectStepperDialog from './CreateProjectStepperDialog'
import {Fab} from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }),
);
export default function Index() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={handleClickOpen}>
                <AddIcon className={classes.extendedIcon} />
            </Fab>
            <CreateProjectStepperDialog open={open} handleClose={handleClose}/>
        </div>
    );
}