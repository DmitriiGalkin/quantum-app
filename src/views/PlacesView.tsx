import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Container, Grid} from "@material-ui/core";
import ForwardBar from "../components/ForwardBar";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Place} from "../modules/place/types";
import PlaceCard from "./cards/PlaceCard";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
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

export default function PlacesView() {
    const classes = useStyles();

    const {data: places = []} = useQuery<Place[]>({
        queryKey: ['places'],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/places")
                .then((res) => res.data),
    })

    return (
        <div className={classes.root}>
            <ForwardBar title="Пространства"/>
            <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                <Grid container spacing={2}>
                    {places.map((g) =>                     <Grid item lg={3} xs={12}>
                        <PlaceCard {...g} /></Grid>)}
                </Grid>
            </Container>
        </div>
    );
}