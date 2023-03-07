import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Container, Theme} from "@mui/material";
import ForwardAppBar from "../components/ForwardAppBar";
import {useAddMeet} from "../../modules/meet";
import SelectProjectStep from "./SelectProjectStep";
import MeetStep from "./MeetStep";
import ConfirmationStep from "./ConfirmationStep";
import {TabPanel} from "../../tools/tabs";
import {DEFAULT_MEET} from "./helper";
import QStepper from "../components/QStepper";

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '32px 32px 0 0',
    },
    bottomNavigation: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
}));

export default function CreateMeetView() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [meet, setMeet] = useState(DEFAULT_MEET)
    const addMeet = useAddMeet()
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 2) {
            addMeet.mutate(meet)
        }
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const props = {
        meet,
        setMeet,
        step: activeStep,
        handleBack,
        handleNext,
    }
    return (
        <div>
            <ForwardAppBar title="Создать встречу"/>
            <div className={classes.content}>
                <Container style={{ padding: '18px' }}>
                    <TabPanel value={activeStep} index={0}>
                        <SelectProjectStep {...props}/>
                    </TabPanel>
                    <TabPanel value={activeStep} index={1}>
                        <MeetStep {...props}/>
                    </TabPanel>
                    <TabPanel value={activeStep} index={2}>
                        <ConfirmationStep {...props}/>
                    </TabPanel>
                    <TabPanel value={activeStep} index={3}>
                        <Typography>
                            Встреча создана!
                        </Typography>
                    </TabPanel>
                </Container>
            </div>
            <QStepper activeStep={activeStep} handleBack={handleBack} handleNext={handleNext}/>
        </div>
    );
}