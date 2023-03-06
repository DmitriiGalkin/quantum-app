import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";
import ForwardAppBar from "../components/ForwardAppBar";
import {Button, MobileStepper, Paper, Theme} from "@mui/material";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import {TabPanel} from "../../tools/tabs";
import {DEFAULT_USER} from "./helper";
import UserStep from "./UserStep";
import {useAddUser} from "../../modules/user";

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

export default function CreateUserPage() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [user, setUser] = useState(DEFAULT_USER)
    const addUser = useAddUser()
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 1) {
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
            <ForwardAppBar title="Создать встречу"/>
            <div className={classes.content}>
                <Container style={{ padding: '18px' }}>
                    <TabPanel value={activeStep} index={0}>
                        <UserStep {...props}/>
                    </TabPanel>
                    <TabPanel value={activeStep} index={3}>
                        <Typography>
                            Участник создан!
                            - найти пространства
                            - найти проекты
                        </Typography>
                    </TabPanel>
                </Container>
            </div>
            <Paper className={classes.bottomNavigation} elevation={3} style={{zIndex: 10 }}>
                <MobileStepper
                    variant="text"
                    steps={3}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={1 === 3 - 1}
                        >
                            Далее
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={false}>
                            <KeyboardArrowLeft />
                            Назад
                        </Button>
                    }
                    style={{
                        backgroundColor: 'white',
                    }}
                />
            </Paper>
        </div>
    );
}