import React from 'react';
import Image from "../components/Image";

import {useNavigate} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {convertToMeetDatetime} from "../../tools/date";
import {Project, useProjectUsers} from "../../modules/project";
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ProjectCardProps extends Project {
    onClick: () => void
}
export default function ProjectCard(project: ProjectCardProps) {
    const { data: users = [] } = useProjectUsers(project.id)
    const active = users.find((user) => user.id === 1) // TODO: убрать в бек

    const firstMeetDateTitle = convertToMeetDatetime(project.meet?.datetime)
    return (
    <Box sx={{ flexDirection: 'column', border: '1px solid #E1E3E8',
            borderRadius: 2,
            padding: 2,
            '& > * + *': {
                paddingTop: 2,
            },
            marginBottom: 2,
            backgroundColor: active ? 'rgba(255,204,0,0.1)' : undefined
        }}
         onClick={project.onClick}
    >
        <Typography variant="h5">
            {project.title}
        </Typography>
        <div style={{ display: 'flex' }}>
            <Box sx={{display: 'block',
                minWidth: '75px'}}>
                <Image
                    src={project.image}
                    alt={project.title}
                    borderRadius={'12'}
                />
            </Box>
            <Box sx={{ paddingLeft: 2 }}>
                <Typography variant="subtitle1" color="primary">
                    {firstMeetDateTitle}
                </Typography>
                <Typography>
                    {project.description}
                </Typography>
                <Typography>
                    <LocationOnIcon/>
                    {project.place?.title}
                </Typography>
            </Box>
        </div>
    </Box>
    );
}