import React, {useState} from 'react';
import {Typography} from "@mui/material";
import ForwardAppBar from "../components/ForwardAppBar";
import {useAddMeet} from "../../modules/meet";
import SelectProjectStep from "./SelectProjectStep";
import MeetStep from "./MeetStep";
import ConfirmationStep from "./ConfirmationStep";
import {TabPanel} from "../../tools/tabs";
import {DEFAULT_MEET} from "./helper";
import QStepper from "../components/QStepper";
import QContainer from "../components/QContainer";

export default function CreateMeetView() {
    const [meet, setMeet] = useState(DEFAULT_MEET)
    const [activeStep, setActiveStep] = React.useState(0);
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
            <QContainer>
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
            </QContainer>
            <QStepper activeStep={activeStep} handleBack={handleBack} handleNext={handleNext}/>
        </div>
    );
}