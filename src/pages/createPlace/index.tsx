import React, {useState} from 'react';
import ForwardAppBar from "../components/ForwardAppBar";
import {TabPanel} from "../../tools/tabs";
import {DEFAULT_PLACE} from "./helper";
import PlaceStep from "./PlaceStep";
import QStepper from "../components/QStepper";
import QContainer from "../components/QContainer";
import {Typography} from "@mui/material";
import {useAddPlace} from "../../modules/place";

export default function CreatePlacePage() {
    const [place, setPlace] = useState(DEFAULT_PLACE)
    const [activeStep, setActiveStep] = React.useState(0);
    const addPlace = useAddPlace()
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 0) {
            addPlace.mutate(place)
        }
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const props = {
        place,
        setPlace,
        step: activeStep,
        handleBack,
        handleNext,
    }
    return (
        <div>
            <ForwardAppBar title="Регистрация"/>
            <QContainer>
                <TabPanel value={activeStep} index={0}>
                    <PlaceStep {...props}/>
                </TabPanel>
                <TabPanel value={activeStep} index={1}>
                    <Typography>
                        Участник создан!
                        - найти пространства
                        - найти проекты
                    </Typography>
                </TabPanel>
            </QContainer>
            <QStepper activeStep={activeStep} handleBack={handleBack} handleNext={handleNext}/>
        </div>
    );
}