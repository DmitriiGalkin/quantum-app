import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Chip, Container, Grid} from "@material-ui/core";
import ForwardAppBar from "../../components/ForwardAppBar";
import {TabPanel} from "../../components/tabs";
import FaceIcon from "@material-ui/icons/Face";
import {useNavigate, useParams} from "react-router-dom";
import {Place} from "../../modules/place/types";
import ProjectCard from "../../components/ProjectCard";
import {usePlace, usePlaceProjects} from "../../modules/place/hook";


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

export default function PlaceView() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { id } = useParams();
    const { data: place = {} as Place } = usePlace(Number(id))
    const { data: projects = [] } = usePlaceProjects(Number(id))
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <ForwardAppBar title={place.title}/>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="О месте" />
                    <Tab label="Проекты" />
                    <Tab label="Участники" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                    <div className={classes.root2}>
                        <Chip variant="outlined" size="small" icon={<FaceIcon />} label="Deletable" />
                    </div>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                    <Grid container spacing={2} alignItems="stretch">
                        {projects.map((project) =>                     <Grid item xs={3}>
                            <ProjectCard {...project} onClick={() => navigate(`/project/${project.id}`)} /></Grid>)}
                    </Grid>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Container maxWidth="sm" style={{ paddingTop: 20 }}>
                    Список участников группы
                </Container>
            </TabPanel>
        </div>
    );
}