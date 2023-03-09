import React, {useContext} from 'react';
import {Meet, useMeets} from "../modules/meet";

import Day from "../components/Day";
import {getMeetsGroup} from "../tools/helper";
import {Fab, Theme} from "@mui/material";
import QZoom from "../components/QZoom";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {useUserMeet} from "../modules/user";

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
export default function MeetsPage() {
    const classes = useStyles();
    const { data: meets = [] } = useUserMeet()
    const meetsGroup = getMeetsGroup(meets)
    const navigate = useNavigate();

    return (
        <div>
            {meetsGroup.map(([date, meets]) => (
                <Day key={date} date={date} meets={meets as Meet[]}/>
            ))}
            <QZoom>
                <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => navigate(`/meet`)}>
                    <AddIcon className={classes.extendedIcon} />
                </Fab>
            </QZoom>
        </div>
    );
}
