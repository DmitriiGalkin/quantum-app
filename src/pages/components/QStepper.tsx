import React from 'react';
import {Task} from "../../modules/task";
import {Box, Button, Chip, MobileStepper, Paper, Theme, Tooltip, Typography} from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import {useNavigate} from "react-router-dom";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    bottomNavigation: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
}));
interface QStepperProps {
    activeStep: number
    handleBack: () => void
    handleNext: () => void
}
export default function QStepper({activeStep, handleBack, handleNext}: QStepperProps) {
    const classes = useStyles();

    return (
        <Paper className={classes.bottomNavigation} elevation={3} style={{zIndex: 10 }}>
            <MobileStepper
                variant="text"
                steps={3}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={1 === 3 - 1}
                    >
                        Далее
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={false}>
                        <KeyboardArrowLeft />
                        Назад
                    </Button>
                }
                style={{
                    backgroundColor: 'white',
                }}
            />
        </Paper>
    );
}