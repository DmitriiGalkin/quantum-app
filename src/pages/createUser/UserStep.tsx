import React, {useState} from 'react';
import {UserStepProps} from "./types";
import {Box, Button, TextField} from "@mui/material";
import {useAuth} from "../../tools/hooks";

export default function UserStep({ user, setUser, handleNext }: UserStepProps) {
    const [email, setEmail] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const [title, setTitle] = useState<string | undefined>()
    const { login } = useAuth();

    // const handleSubmit = () => {
    //     console.log({...user, email, password, title}, '{...user, email, password, title}')
    //     setUser({...user, email, password, title})
    //     // handleNext()
    // }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(event, 'event')
        const data = new FormData(event.currentTarget);
        console.log(data, 'data')

        const f = {
            ...user,
            email: data.get("email") as string,
            password: data.get("password") as string,
            title: data.get("title") as string,
        }
        console.log(f, 'f')

        setUser(f);
        // login({
        //     email: data.get("email"),
        //     password: data.get("password")
        // });
        handleNext()
        event.preventDefault();
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField name='email' label="Телефон/Почта" variant="standard" fullWidth/>
            <TextField name='password' label="Пароль" variant="standard" fullWidth/>
            <TextField name='title' label="Пароль" variant="standard" fullWidth/>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Создать
            </Button>
        </Box>
    );
}