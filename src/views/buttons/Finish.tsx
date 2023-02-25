import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});



export default function Finish({ handleBack, handleNext }: {handleBack: () => void, handleNext: () => void }) {
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