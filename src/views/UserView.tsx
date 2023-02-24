import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Avatar, Card, CardHeader, Container, Grid, LinearProgress} from "@material-ui/core";
import ForwardBar from "../components/ForwardBar";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {Project} from "../modules/project/types";
import axios from "axios";
import {User} from "../modules/user/types";
import {Unique} from "../modules/unique/types";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function UserView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { id } = useParams();


    const {data: user = {} as Project } = useQuery<User>({
        queryKey: ['user'],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/users/" + Number(id))
                .then((res) => res.data),
    })
    const {data: uniques = [] } = useQuery<Unique[]>({
        queryKey: ['userUniques'],
        queryFn: () =>
            axios
                .get("http://localhost:3001/api/v1/users/" + Number(id) + "/uniques")
                .then((res) => res.data),
    })
    console.log(uniques, 'uniques')

    return (
        <div className={classes.root}>
            <ForwardBar title={user.title}/>
            <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                <Typography variant="h1">
                    {user.title}
                </Typography>
                <Grid container spacing={3}>
                    {uniques.map((unique) => (
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                {unique.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}