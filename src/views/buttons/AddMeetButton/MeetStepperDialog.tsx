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

import SelectProjectStep from './steps/SelectProjectStep'
import MeetStep from "./steps/MeetStep";
import ConfirmationStep from "./steps/ConfirmationStep";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import {NewMeet} from "../../../modules/meet/types";
import {useAddMeet} from "../../../modules/meet/hook";
import {MeetStepProps} from "./steps/types";
import {DateTimeFormatter, nativeJs} from "@js-joda/core";
import {dateTimeFormatter} from "../../../tools/date";


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

function getMeetSteps() {
    return [
        {
            id: 0,
            label: 'Проект',
            component: SelectProjectStep
        },
        {
            id: 1,
            label: 'Встреча',
            component: MeetStep
        },
        {
            id: 2,
            label: 'Проверяем',
            component: ConfirmationStep
        },
    ];
}

function getStepContent({ step, ...stepProps }: MeetStepProps) {
    switch (step) {
        case 0:
            return ;
        case 1:
            return <MeetStep {...stepProps} />;
        case 2:
            return <ConfirmationStep {...stepProps} />;
        default:
            return 'Unknown step';
    }
}

const DEFAULT_MEET: NewMeet = {
    title: 'новая встреча',
    description: 'описание встречи',
    image: null,
    datetime: nativeJs(new Date()).format(dateTimeFormatter),
    projectId: null,
}

export default function CustomizedSteppers({open, handleClose}: {open: boolean, handleClose: ()=>void}) {
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
    const steps = getMeetSteps();
    const ActiveStep = steps.find((s) => s.id === activeStep)?.component || (() => null)

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const props = {
        meet,
        setMeet,
        step: activeStep,
        handleBack,
        handleNext,
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Создать встречу
                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                    {steps.map(({ label }, index) => (
                        <Step key={label} onClick={handleStep(index)}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </DialogTitle>
            <DialogContent>
                <div className={classes.root}>
                    {activeStep === steps.length ? (
                        <Typography className={classes.instructions}>
                            Встреча создана!
                        </Typography>
                    ) : <ActiveStep {...props}/> }
                </div>
            </DialogContent>
        </Dialog>
    );
}