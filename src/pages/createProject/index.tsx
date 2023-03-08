import React, {useState} from 'react';
import {Typography} from "@mui/material";
import StepPlace from "./SelectPlace";
import ProjectStep from "./ProjectStep";
import StepConfirmation from "./ProjectConfirmation";
import {Project, useAddProject, useProject, useUpdateProject} from "../../modules/project";
import QStepper from "../../components/QStepper";
import ForwardAppBar from "../../components/ForwardAppBar";
import {TabPanel} from "../../components/tabs";
import QContainer from "../../components/QContainer";
import {useParams} from "react-router-dom";

const DEFAULT_PROJECT: Project = {
    id: 12,
    image: '/group_dd.jpg',
    title: 'новый проект',
    description: 'описание нового проекта',
    placeId: null,
}
export default function CreateProjectStepperDialog({ isEdit }: {isEdit?: boolean}) {
    const { id } = useParams();
    const { data: projectOld } = useProject(Number(id))
    const [project, setProject] = useState(projectOld || DEFAULT_PROJECT)
    const [activeStep, setActiveStep] = React.useState(0);
    const addProject = useAddProject()
    const updateProject = useUpdateProject()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 2) {
            isEdit ? updateProject.mutate(project) : addProject.mutate(project)
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
            <ForwardAppBar title={isEdit ? 'Редактирование проекта' : "Создание проекта"}/>
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