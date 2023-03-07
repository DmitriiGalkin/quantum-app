import React, {useState} from 'react';
import ForwardAppBar from "../components/ForwardAppBar";
import {TabPanel} from "../../tools/tabs";
import {DEFAULT_USER} from "./helper";
import UserStep from "./UserStep";
import {useAddUser} from "../../modules/user";
import QStepper from "../components/QStepper";
import QContainer from "../components/QContainer";
import {Typography} from "@mui/material";

export default function CreateUserPage() {
    const [user, setUser] = useState(DEFAULT_USER)
    const [activeStep, setActiveStep] = React.useState(0);
    const addUser = useAddUser()
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 0) {
            addUser.mutate(user)
        }
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const props = {
        user,
        setUser,
        step: activeStep,
        handleBack,
        handleNext,
    }
    return (
        <div>
            <ForwardAppBar title="Регистрация"/>
            <QContainer>
                <TabPanel value={activeStep} index={0}>
                    <UserStep {...props}/>
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