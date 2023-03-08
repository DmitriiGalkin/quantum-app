import React from 'react';
import QBottomNavigation from "../components/QBottomNavigation";
import ProjectCard from "../components/ProjectCard";
import {Box, Container, Fab} from "@mui/material";
import {useProjects} from "../../modules/project";
import {useNavigate} from "react-router-dom";
import QZoom from "../components/QZoom";
import AddIcon from "@mui/icons-material/Add";
import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
export default function ProjectsView() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { data: projects = [] } = useProjects()

    return (
        <div>
            <Container disableGutters>
                {projects.map((project) => <ProjectCard key={project.id} {...project} onClick={() => navigate(`/project/${project.id}`)}/>)}
                <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #E1E3E8',
                    borderRadius: 2,
                    padding: 2,
                    marginBottom: 2,
                }}>
                    Список релевантных проектов: новые проекты, проекты поблизости, проекты по схожим тегам, проекты по схожим пространствам
                </Box>
            </Container>
            <QBottomNavigation value={1}/>
            <QZoom>
                <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={() => navigate(`/project`)}>
                    <AddIcon className={classes.extendedIcon} />
                </Fab>
            </QZoom>
        </div>
    );
}
