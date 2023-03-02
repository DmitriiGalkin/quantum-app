import React from 'react';
import {createStyles} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Fab} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ProjectCard from "../../cards/ProjectCard";

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
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const onClick = () => navigate(`/meet`);

    return (
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={onClick}>
            <AddIcon className={classes.extendedIcon} />
        </Fab>
    );
}