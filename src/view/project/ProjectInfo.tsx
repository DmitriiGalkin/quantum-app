import React from 'react';
import Typography from '@material-ui/core/Typography';

import {Project} from "../../modules/project/types";
import AddMeetButton from "./AddMeetButton";

export default function ProjectInfo(project: Project) {

    return (
        <div>
            <Typography variant="h1">
                {project.title}
            </Typography>
            <Typography variant="body1">
                {project.title}
            </Typography>
            <AddMeetButton/>
        </div>
    );
}