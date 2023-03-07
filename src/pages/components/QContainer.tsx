import React from 'react';
import {Task} from "../../modules/task";
import {Box, Button, Chip, Container, MobileStepper, Paper, Theme, Tooltip, Typography} from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import {useNavigate} from "react-router-dom";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '32px 32px 0 0',
    },
}));
interface QContainerProps {
    children?: React.ReactNode
}
export default function QContainer({children}: QContainerProps) {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Container style={{ padding: '18px' }}>
                {children}
            </Container>
        </div>
    );
}