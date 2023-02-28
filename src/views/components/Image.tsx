import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    imageW: {
        position: 'relative',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 24,
    },
    imageContainer: {
        width: '100%',
        paddingTop: '100%',
    }
}));

export default function Image({ src, alt }: { src: string, alt: string }) {
    const classes = useStyles();

    return (
        <Box className={classes.imageW}>
            <Box className={classes.imageContainer}>
                <img alt={alt} src={src}  className={classes.image}/>
            </Box>
        </Box>
    );
}