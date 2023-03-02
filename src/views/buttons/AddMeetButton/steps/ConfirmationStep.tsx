import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {MeetStepProps} from "./types";
import {Typography} from "@mui/material";
import {Meet} from "../../../../modules/meet";
import DateMeets from "../../../cards/DateMeets";
import {convertToMeetsGroupTime, convertToMeetsGroupTime2} from "../../../../tools/date";
import {Project, useProject} from "../../../../modules/project";
import {User, useUser} from "../../../../modules/user";
import ProjectCard from "../../../cards/ProjectCard";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});



export default function ConfirmationStep({ meet }: MeetStepProps) {
    const classes = useStyles();
    const { data: project = {} as Project } = useProject(meet.projectId || 0)
    const { data: user = {} as User } = useUser(1)

    return (
        <div>
            <Typography variant="h5" sx={{ paddingBottom: 6 }}>
                Место
            </Typography>
            <ProjectCard {...project} onClick={() => console.log('333')}/>
            {/*<DateMeets date={convertToMeetsGroupTime2(meet.startDatetime)} meets={[{...meet, id: 0, project, users: [user]}] as Meet[]}/>*/}
        </div>
    );
}