import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Task} from "../../modules/task/types";
import {Box, Button} from "@material-ui/core";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            marginRight: theme.spacing(2),
        },
    }),
);

export default function TaskCard(task: Task) {
    const classes = useStyles();

    return (
        <Box>
            <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<EmojiEventsIcon />}
                className={classes.button}
            >
                {task.points}
            </Button>
            <Typography gutterBottom variant="h6" component="span">
                {task.title}
            </Typography>
        </Box>
    );
}