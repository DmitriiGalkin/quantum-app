import React, {useState} from 'react';
import {Typography} from "@mui/material";
import StepPlace from "./SelectPlace";
import ProjectStep from "./ProjectStep";
import StepConfirmation from "./ProjectConfirmation";
import {Project, useAddProject} from "../../modules/project";
import QStepper from "../components/QStepper";
import ForwardAppBar from "../components/ForwardAppBar";
import {TabPanel} from "../../tools/tabs";
import QContainer from "../components/QContainer";

const DEFAULT_PROJECT: Project = {
    id: 12,
    image: '/group_dd.jpg',
    title: 'новый проект',
    description: 'описание нового проекта',
    placeId: null,
}
export default function CreateProjectStepperDialog() {
    const [project, setProject] = useState(DEFAULT_PROJECT)
    const [activeStep, setActiveStep] = React.useState(0);
    const addProject = useAddProject()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 2) {
            addProject.mutate(project)
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const props = {
        project,
        setProject,
        handleBack,
        handleNext
    }
    return (
        <div>
            <ForwardAppBar title="Создать проект"/>
            <QContainer>
                <TabPanel value={activeStep} index={0}>
                    <StepPlace {...props}/>
                </TabPanel>
                <TabPanel value={activeStep} index={1}>
                    <ProjectStep {...props}/>
                </TabPanel>
                <TabPanel value={activeStep} index={2}>
                    <StepConfirmation {...props}/>
                </TabPanel>
                <TabPanel value={activeStep} index={3}>
                    <Typography>
                        Проект создан
                    </Typography>
                </TabPanel>
            </QContainer>
            <QStepper activeStep={activeStep} handleBack={handleBack} handleNext={handleNext}/>
        </div>
    );
}