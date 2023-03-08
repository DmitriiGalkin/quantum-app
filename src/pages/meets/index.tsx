import React from 'react';
import {Meet, useMeets} from "../../modules/meet";

import DateMeets from "../../components/DateMeets";
import {getMeetsGroup} from "../helper";
import {Fab} from "@mui/material";
import QZoom from "../../components/QZoom";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from "react-router-dom";
import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: `${theme.spacing(4)}px ${theme.spacing(4)}px 0 0`,
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
export default function MeetsView() {
    const classes = useStyles();
    const { data: meets = [] } = useMeets()
    const meetsGroup = getMeetsGroup(meets)
    const navigate = useNavigate();

    return (
        <div>
            {meetsGroup.map(([date, meets]) => (
                <DateMeets key={date} date={date} meets={meets as Meet[]}/>
            ))}
            <QZoom>
                <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => navigate(`/meet`)}>
                    <AddIcon className={classes.extendedIcon} />
                </Fab>
            </QZoom>
        </div>
    );
}
