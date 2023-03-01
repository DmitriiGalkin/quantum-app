import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Project} from "../../modules/project/types";
import {Button, CardActionArea, Grid, IconButton} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Image from "../components/Image";

import {Link} from "react-router-dom";
import {useAddProjectUser, useDeleteProjectUser, useProjectUsers} from "../../modules/project/hook";
import {Box} from "@mui/material";
import {useNavigate} from 'react-router-dom';
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