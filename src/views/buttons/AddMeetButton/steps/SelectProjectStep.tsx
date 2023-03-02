import React from "react";
import {MeetStepProps} from "./types";
import {useUserProjects} from "../../../../modules/user";
import ProjectCard from "../../../cards/ProjectCard";
import {Typography} from "@mui/material";

export default function SelectProjectStep({ meet, setMeet, handleNext }: MeetStepProps) {
    const { data: projects = [] } = useUserProjects(1)

    return (
        <div>
            <Typography>
                Выберите проект по которому будет встреча
            </Typography>
            {projects.map((project) => <ProjectCard {...project} onClick={() => {
                setMeet({ ...meet, projectId: project.id })
                handleNext()
            }}/>)}
        </div>
    );
}