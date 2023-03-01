import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Task} from "../../modules/task/types";
import {Box, Chip, Button, Typography} from "@mui/material";

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
            <div><Chip label="Рисование" color="primary" size="small" variant="outlined" />
                </div>
            <Typography component="div" style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'Source Sans Pro', fontWeight: 700 }}>
                {task.title}
            </Typography>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Box style={{ display: 'flex' }}>
                    <Typography component="div" style={{ flexGrow: 1, fontSize: 14, lineHeight: '18px', fontFamily: 'Source Sans Pro', fontWeight: 400 }}>
                        {task.points}
                    </Typography>
                    <Typography component="div" style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'Source Sans Pro', fontWeight: 700 }}>
                        {task.points}
                    </Typography>
                </Box>
            </Box>
            <div><Button
                variant="contained"
                color="secondary"
                startIcon={<EmojiEventsIcon />}
                className={classes.button}
                fullWidth
                sx={{
                    borderRadius: 2
                }}
            >
                {task.points}
            </Button></div>


        </Box>
    );
}