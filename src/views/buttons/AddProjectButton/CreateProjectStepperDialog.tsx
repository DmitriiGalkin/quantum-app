import React, {useState} from 'react';
import {createStyles, makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Typography from '@material-ui/core/Typography';
import {StepIconProps} from '@material-ui/core/StepIcon';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import StepPlace from "./steps/SelectPlace";
import ProjectStep from "./steps/ProjectStep";
import StepConfirmation from "./steps/ProjectConfirmation";
import {Project} from "../../../modules/project/types";
import {useAddProject} from "../../../modules/project/hook";


const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props: StepIconProps) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }),
);

function getSteps() {
    return ['Где', 'О чем', 'Проверяем'];
}

function getStepContent(project: Project, setProject: (project: Project)=> void, step: number, handleBack: () => void, handleNext: () => void) {
    const stepProps = {
        project,
        setProject,
        handleBack,
        handleNext
    }
    switch (step) {
        case 0:
            return <StepPlace {...stepProps} />;
        case 1:
            return <ProjectStep {...stepProps}/>;
        case 2:
            return <StepConfirmation {...stepProps} />;
        default:
            return 'Unknown step';
    }
}
const DEFAULT_PROJECT: Project = {
    id: 12,
    image: '/group_dd.jpg',
    title: 'новый проект',
    description: 'описание нового проекта',
    placeId: null,
}

export default function CreateProjectStepperDialog({open, handleClose}: {open: boolean, handleClose: ()=>void}) {
    const [project, setProject] = useState(DEFAULT_PROJECT)
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
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

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    return (
        <Dialog
            key={Math.random()}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Создать проект
                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                    {steps.map((label, index) => (
                        <Step key={label} onClick={handleStep(index)}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </DialogTitle>
            <DialogContent>
                <div className={classes.root}>

                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>
                                    Встреча создана!
                                </Typography>
                            </div>
                        ) : (
                            <div>
                                {getStepContent(project, setProject, activeStep, handleBack, handleNext)}
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}