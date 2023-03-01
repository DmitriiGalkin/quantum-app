import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Task} from "../../modules/task/types";
import {Box, Button, Chip, Typography, Theme} from "@mui/material";

import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '1px solid #E1E3E8',
            borderRadius: 12,
            padding: 12,
            '& > * + *': {
                marginTop: 8,
            }
        },
        button: {
            marginRight: theme.spacing(2),
        },
    }),
);

export default function TaskCard(task: Task) {
    const classes = useStyles();

    return (
        <Box className={classes.root} sx={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <Chip label="Рисование" color="primary" size="small" variant="outlined"                 sx={{
                    borderRadius: 2
                }}/>
            </div>
            <div>
                <Typography component="div" style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'Source Sans Pro', fontWeight: 700 }}>
                    {task.title}
                </Typography>
            </div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Box style={{ display: 'flex' }}>
                    <Typography component="div" style={{ flexGrow: 1, fontSize: 14, lineHeight: '18px', fontFamily: 'Source Sans Pro', fontWeight: 400 }}>
                        Количество баллов
                    </Typography>
                    <EmojiEventsIcon style={{ width: 20, height: 20 }}/>
                    <Typography component="div" style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'Source Sans Pro', fontWeight: 700, paddingLeft: 6 }}>
                         {task.points}
                    </Typography>
                </Box>
            </Box>
            <div><Button
                variant="contained"
                color="secondary"
                // startIcon={<EmojiEventsIcon />}
                className={classes.button}
                fullWidth
                sx={{
                    borderRadius: 2
                }}
            >
                Начать
            </Button></div>


        </Box>
    );
}