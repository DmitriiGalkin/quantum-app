import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import {Project} from "../../modules/project/types";

export default function ProjectInfo(project: Project) {
    return (
        <div>
            <Typography variant="h1">
                {project.title}
            </Typography>
            <Typography variant="body1">
                {project.title}
            </Typography>
        </div>
    );
}