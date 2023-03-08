import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Container, Grid} from "@material-ui/core";
import ForwardAppBar from "../../components/ForwardAppBar";
import PlaceCard from "../../components/PlaceCard";
import {usePlaces} from "../../modules/place/hook";
import Button from "@material-ui/core/Button";
import {useNavigate} from "react-router-dom";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    root2: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function MapPage() {
    const classes = useStyles();
    const navigate = useNavigate();

    const { data: places = [] } = usePlaces()
    const handleBack = () => navigate('/place')

    return (
        <div className={classes.root}>
            <ForwardAppBar title="Пространства"/>
            <Button onClick={handleBack}>
                Создать пространство
            </Button>
            <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                <Grid container spacing={2}>
                    {places.map((place) =>                     <Grid item lg={3} xs={12}>
                        <PlaceCard {...place} /></Grid>)}
                </Grid>
            </Container>
        </div>
    );
}