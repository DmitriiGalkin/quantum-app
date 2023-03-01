import React, {useState} from 'react';
import {makeStyles, createStyles, withStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";
import ForwardAppBar from "./components/ForwardAppBar";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import {useAddMeet} from "../modules/meet/hook";
import SelectProjectStep from "./buttons/AddMeetButton/steps/SelectProjectStep";
import MeetStep from "./buttons/AddMeetButton/steps/MeetStep";
import ConfirmationStep from "./buttons/AddMeetButton/steps/ConfirmationStep";
import {NewMeet} from "../modules/meet/types";
import {nativeJs} from "@js-joda/core";
import {dateTimeFormatter} from "../tools/date";
import StepConnector from "@material-ui/core/StepConnector";
import {StepIconProps} from "@material-ui/core/StepIcon";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import clsx from "clsx";
import {Theme} from "@mui/material";

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
const useStyles = makeStyles((theme: Theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '32px 32px 0 0',
    },
    stepper: {
        backgroundColor: 'inherit',
    },
    root: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        height: 0,
        paddingTop: '156.25%', // 16:9
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    title: {
        paddingTop: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
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

const DEFAULT_MEET: NewMeet = {
    title: 'новая встреча',
    description: 'описание встречи',
    image: null,
    datetime: nativeJs(new Date()).format(dateTimeFormatter),
    projectId: null,
}
export default function MeetCreateView() {
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
        <div className={classes.root}>
            <ForwardAppBar title="Создать встречу"/>
            <Stepper className={classes.stepper} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map(({ label }, index) => (
                    <Step key={label} onClick={handleStep(index)}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={classes.content}>
                <Container maxWidth="lg" style={{ padding: '24px 32px' }}>
                    {activeStep === steps.length ? (
                        <Typography className={classes.instructions}>
                            Встреча создана!
                        </Typography>
                    ) : <ActiveStep {...props}/> }
                </Container>
            </div>
        </div>
    );
}