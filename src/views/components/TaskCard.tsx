import React from 'react';
import {Task} from "../../modules/task";
import {Box, Button, Chip, Typography} from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function TaskCard(task: Task) {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #E1E3E8',
            borderRadius: 2,
            padding: 2,
            '& > * + *': {
                marginTop: 2,
            },
            marginBottom: 2,
        }}>
            <div>
                <Chip label="Рисование" color="primary" size="small" variant="outlined"
                      sx={{
                    borderRadius: 2
                }}/>
            </div>
            <div>
                <Typography variant="h5">
                    {task.title}
                </Typography>
            </div>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Typography component="div" style={{ flexGrow: 1 }}>
                    Количество баллов
                </Typography>
                <AutoAwesomeIcon style={{ width: 20, height: 20 }} color="primary"/>
                <Typography variant="subtitle1" sx={{ paddingLeft: 1 }}>
                     {task.points}
                </Typography>
            </Box>
            <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{
                    borderRadius: 2,
                    marginRight: 2,
                    marginTop: 1,
                }}
            >
                Начать
            </Button>


        </Box>
    );
}