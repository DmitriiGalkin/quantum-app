import React from 'react';
import {PlaceStepProps} from "./types";
import {Box, Button, TextField} from "@mui/material";

export default function PlaceStep({ place, setPlace, handleNext }: PlaceStepProps) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const data = new FormData(event.currentTarget);

        setPlace({
            ...place,
            title: data.get("title") as string,
            description: data.get("description") as string,
        });
        handleNext()
        event.preventDefault();
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField name='title' label="Название" variant="standard" fullWidth/>
            <TextField name='description' label="Описание" variant="standard" fullWidth/>
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