import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Container, Theme} from "@mui/material";
import StepPlace from "./SelectPlace";
import ProjectStep from "./ProjectStep";
import StepConfirmation from "./ProjectConfirmation";
import {Project} from "../../modules/project/types";
import {useAddProject} from "../../modules/project/hook";
import QStepper from "../components/QStepper";
import ForwardAppBar from "../components/ForwardAppBar";
import {TabPanel} from "../../tools/tabs";

const DEFAULT_PROJECT: Project = {
    id: 12,
    image: '/group_dd.jpg',
    title: 'новый проект',
    description: 'описание нового проекта',
    placeId: null,
}
const useStyles = makeStyles((theme: Theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '32px 32px 0 0',
    },
}));
export default function CreateProjectStepperDialog() {
    const [project, setProject] = useState(DEFAULT_PROJECT)
    const classes = useStyles();
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
            <div className={classes.content}>
                <Container style={{ padding: '18px' }}>
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
                </Container>
            </div>
            <QStepper activeStep={activeStep} handleBack={handleBack} handleNext={handleNext}/>
        </div>
    );
}