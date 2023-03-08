import React from 'react';
import {MeetStepProps} from "./types";
import {Typography} from "@mui/material";
import {Meet} from "../../modules/meet";
import DateMeets from "../../components/DateMeets";
import {convertToMeetsGroupTime2, toServerDatetime} from "../../tools/date";
import {Project, useProject} from "../../modules/project";
import {User, useUser} from "../../modules/user";
import ProjectCard from "../../components/ProjectCard";

export default function ConfirmationStep({ meet }: MeetStepProps) {
    const { data: project = {} as Project } = useProject(meet.projectId || 0)
    const { data: user = {} as User } = useUser(1)
    return (
        <div>
            <Typography variant="h5" sx={{ paddingBottom: 6 }}>
                Проект
            </Typography>
            <ProjectCard {...project} onClick={() => console.log('333')}/>
            <Typography variant="h5" sx={{ paddingBottom: 6 }}>
                Время
            </Typography>
            <DateMeets date={convertToMeetsGroupTime2(meet.datetime)} meets={[{...meet, id: 0, project, users: [user], datetime: toServerDatetime(meet.datetime)}] as Meet[]}/>
        </div>
    );
}