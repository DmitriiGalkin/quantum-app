import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {MeetStepProps} from "./types";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});



export default function ConfirmationStep({ handleBack, handleNext }: MeetStepProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className={classes.root}>
            Проверили все ли верно?
            <Button onClick={handleBack}>
                Back
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
            >
                Next
            </Button>
        </div>
    );
}