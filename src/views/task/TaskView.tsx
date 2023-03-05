import React, {useState} from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, CardHeader, Container, Grid} from "@material-ui/core";
import ForwardAppBar from "../components/ForwardAppBar";
import {useParams} from "react-router-dom";
import {Task, useTask} from "../../modules/task";
import CampaignIcon from '@mui/icons-material/Campaign';
import {IconButton} from "@mui/material";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import SelectEmotion from "./SelectEmotion";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        height: 0,
        paddingTop: '156.25%', // 16:9
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    title: {
        paddingTop: theme.spacing(1),
    },
}));

export default function UserView() {
    const classes = useStyles();
    const { id } = useParams();
    const { data: task = {} as Task } = useTask(Number(id))
    const campaignIconOnClick = () => {
        let utterance = new SpeechSynthesisUtterance(task.title);
        speechSynthesis.speak(utterance);
    }
    const [emotion, setEmotion] = useState<number>()

    return (
        <div className={classes.root}>
            <ForwardAppBar title={task.title} icon={<CampaignIcon/>} onClick={campaignIconOnClick}/>
            <Container style={{ paddingTop: 20 }}>
                <SelectEmotion onClick={(v) => setEmotion(v)}/>
                {emotion === 6 && 'У тебя сегодня прекрасное настроение!'}
            </Container>
        </div>
    );
}