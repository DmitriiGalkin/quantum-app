import React from 'react';
import {PlaceStepProps} from "./types";
import {Box, TextField} from "@mui/material";

export default function PlaceStep({ place, setPlace }: PlaceStepProps) {
    return (
        <Box sx={{ mt: 1 }}>
            <TextField
                name='title'
                label="Название"
                variant="standard"
                fullWidth
                value={place.title}
                onChange={(e) => setPlace({ ...place, title: e.target.value})}
            />
            <TextField name='description' label="Описание" variant="standard" fullWidth value={place.description} onChange={(e) => setPlace({ ...place, description: e.target.value})}/>
        </Box>
    );
}