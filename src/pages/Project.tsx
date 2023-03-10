import React from 'react';
import {makeStyles} from '@mui/styles';
import {Avatar, Box, Button, Container, IconButton, Typography, Theme} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import PenIcon from "@mui/icons-material/Edit";
import ForwardAppBar from "../components/ForwardAppBar";
import {useNavigate, useParams} from "react-router-dom";
import {
    Project,
    useAddProjectUser,
    useDeleteProjectUser,
    useProject,
    useProjectMeets,
    useProjectUsers
} from "../modules/project";
import Image from "../components/Image";
import {getMeetsGroup} from "../tools/helper";
import Day from "../components/Day";
import {Meet} from "../modules/meet";
import {useUnit} from "../tools/hooks";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: `${theme.spacing(4)}px ${theme.spacing(4)}px 0 0`,
    },
    block: {
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 12,
        padding: 12,
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
}));

export default function ProjectPage() {
    const classes = useStyles();
    const navigate = useNavigate();
    const user = useUnit();

    const { id } = useParams();
    const { data: project = {} as Project } = useProject(Number(id))
    const { data: meets = [] } = useProjectMeets(Number(id))
    const { data: users = [] } = useProjectUsers(Number(id))
    const addProjectUser = useAddProjectUser(Number(id))
    const deleteProjectUser = useDeleteProjectUser(Number(id))
    const active = users.map((user) => user.id).includes(user.id)
    const meetsGroup = getMeetsGroup(meets)

    const onClick = () => {
        if (active) {
            deleteProjectUser.mutate({ projectId: project.id })
        } else {
            addProjectUser.mutate({ projectId: project.id })
        }
    }

    const shareOnClick = async () => {
        if (navigator.share) {
            await navigator
                .share({
                    text: 'Супер проект',
                    url: 'http://192.168.1.3:3000/projects/1'
                })
                .then(() => {
                    console.log("Successfully shared");
                })
                .catch((error) => {
                    console.error("Something went wrong", error);
                });
        } else {
            console.error('navigator.share нет такого объекта. Возможно надо перейти на HTTPS');
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ForwardAppBar title={project.title} icon={<PenIcon style={{ color: 'white' }}/>} onClick={() => navigate(`/project/${project.id}/edit` )}/>
            <div className={classes.container}>
                <Box sx={{ margin: '0 18px', paddingTop: 3}}>
                    <Image alt={project.title} src={project.image} borderRadius={'24px 24px 0 0'} />
                </Box>
                <Container disableGutters sx={{ padding: '24px 18px',
                    '& > * + *': {
                        marginTop: 2,
                    }
                }}>
                    <Typography variant="h5">
                        {project.title}
                    </Typography>
                    <Typography>
                        {project.description}
                    </Typography>
                    <Box className={classes.block}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon />}
                            onClick={onClick}
                        >
                            {active ? 'Покинуть проект' : 'Участвовать в проекте'}
                        </Button>
                        <Box sx={{ display: 'flex',
                            alignItems: 'center',
                            paddingLeft: 1,
                            paddingTop: 1,
                        }}>
                            <IconButton aria-label="previous">
                                <FavoriteIcon color={project.favorite ? 'primary' : undefined}/>
                            </IconButton>
                            <IconButton aria-label="next" onClick={() => shareOnClick()}>
                                <ShareIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    {project.place && (
                        <div className={classes.block}>
                            <Typography variant="h5">
                                Место проведения
                            </Typography>
                            <Box sx={{padding: 1, display: "flex"}}>
                                <Box sx={{display: 'block',
                                    minWidth: '75px'}}>
                                    <Image
                                        src={project.place.image}
                                        alt={project.place.title}
                                        borderRadius={'12'}
                                    />
                                </Box>
                                <Box sx={{flexGrow:1, paddingLeft: 2}}>
                                    <Typography variant="h5">
                                        {project.place.title}
                                    </Typography>
                                    <Typography>
                                        {project.place.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                    )}
                    <div className={classes.block}>
                        <Typography variant="h5">
                            Встречи
                        </Typography>
                        {meetsGroup.map(([date, meets]) => (
                            <Day date={date} meets={meets as Meet[]}/>
                        ))}
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon />}
                            onClick={() => navigate(`/meet`)}
                        >
                            Создать встречу
                        </Button>
                    </div>
                    <div className={classes.block}>
                        <Typography variant="h5">
                            Участники
                        </Typography>
                        {users.map((user) => (
                            <Box sx={{padding: 1, display: "flex"}}>
                                <Avatar
                                    alt={user.title}
                                    src={user.image}
                                    className={classes.large}
                                />
                                <Box sx={{flexGrow:1, paddingLeft: 2}}>
                                    <Typography variant="subtitle1">
                                        {user.title}
                                    </Typography>
                                    <Typography>
                                        Вдохновитель
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </div>
                </Container>
            </div>
        </Box>
    );
}