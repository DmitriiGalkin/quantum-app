import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Project} from "../../modules/project/types";
import Image from "../components/Image";

import {useNavigate} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {convertToMeetDatetime} from "../../tools/date";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '1px solid #E1E3E8',
            borderRadius: 12,
            padding: 12,
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        image: {
            display: 'block',
            minWidth: 75,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
        title: {
            paddingBottom: theme.spacing(2),
        },
        description: {
            paddingLeft: theme.spacing(2),
        },
    }),
);



export default function ProjectCard(project: Project) {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleOnClick = () => navigate(`/project/${project.id}`);
    const firstMeetDateTitle = convertToMeetDatetime(project.meet?.datetime)
    return (
    <Box className={classes.root} sx={{ flexDirection: 'column' }} onClick={handleOnClick}>
        <Typography className={classes.title} style={{ fontSize: 14, lineHeight: '20px', fontFamily: 'Source Sans Pro', fontWeight: 700 }}>
            {project.title}
        </Typography>
        <div style={{ display: 'flex' }}>
            <div className={classes.image}>
                <Image
                    src={`/${project.image}`}
                    alt={project.title}
                />
            </div>
            <div className={classes.description}>
                <Typography color="primary" style={{ fontSize: 13, lineHeight: '19px', fontFamily: 'Source Sans Pro', fontWeight: 700 }}>
                    {firstMeetDateTitle}
                </Typography>
                <Typography style={{ fontSize: 13, lineHeight: '16px', fontFamily: 'Source Sans Pro', fontWeight: 300 }}>
                    {project.description}
                </Typography>
            </div>
        </div>
    </Box>
    );
}