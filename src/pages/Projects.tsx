import React from 'react';
import ProjectCard from "../components/ProjectCard";
import {Box, Fab, Theme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import QZoom from "../components/QZoom";
import AddIcon from "@mui/icons-material/Add";
import {makeStyles} from "@mui/styles";
import {useOnlyUserProjects} from "../modules/user";

const useStyles = makeStyles((theme: Theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
export default function ProjectsPage() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { data: projects = [] } = useOnlyUserProjects()

    return (
        <div>
            {projects.map((project) => <ProjectCard key={project.id} {...project} onClick={() => navigate(`/project/${project.id}`)}/>)}
            {!projects.length && (
                <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #E1E3E8',
                    borderRadius: 2,
                    padding: 2,
                    marginBottom: 2,
                }}>
                    Нет ни одного активного проекта в ваших пространствах, - своетую подписаться на <a onClick={() => navigate('/map')}>пространство</a>
                </Box>
            )}
            <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #E1E3E8',
                borderRadius: 2,
                padding: 2,
                marginBottom: 2,
            }}>
                Список релевантных проектов: новые проекты, проекты поблизости, проекты по схожим тегам, проекты по схожим пространствам
            </Box>
            <QZoom>
                <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => navigate(`/project`)}>
                    <AddIcon className={classes.extendedIcon} />
                </Fab>
            </QZoom>
        </div>
    );
}
