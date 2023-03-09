import React, {useState} from 'react';
import ForwardAppBar from "../../components/ForwardAppBar";
import {TabPanel} from "../../components/tabs";
import {NewUser, useAddUser} from "../../modules/user";
import QStepper from "../../components/QStepper";
import QContainer from "../../components/QContainer";
import {Box, TextField, Typography} from "@mui/material";

const DEFAULT_USER: NewUser = {}
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

    return (
        <div>
            <ForwardAppBar title="Регистрация"/>
            <QContainer>
                <TabPanel value={activeStep} index={0}>
                    <Box>
                        <TextField
                            name='email'
                            label="Телефон/Почта"
                            variant="standard"
                            fullWidth
                            value={user.title}
                            onChange={(e) => setUser({ ...user, email: e.target.value})}
                        />
                        <TextField
                            name='password'
                            label="Пароль"
                            variant="standard"
                            fullWidth
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value})}
                        />
                        <TextField
                            name='title'
                            label="Имя и фамилия"
                            variant="standard"
                            fullWidth
                            value={user.title}
                            onChange={(e) => setUser({ ...user, title: e.target.value})}
                        />
                    </Box>
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