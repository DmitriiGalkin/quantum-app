import React from "react";
import {MeetStepProps} from "./types";
import {useUserProjects} from "../../modules/user";
import ProjectCard from "../components/ProjectCard";
import {Typography} from "@mui/material";
import {getProjectDefaultDatetime} from "./helper";

export default function SelectProjectStep({ meet, setMeet, handleNext }: MeetStepProps) {
    const { data: projects = [] } = useUserProjects(1)

    return (
        <div>
            <Typography variant="h5" sx={{ paddingBottom: 1 }}>
                Выберите проект
            </Typography>
            {projects.map((project) => <ProjectCard {...project} onClick={() => {
                const [datetime, endDatetime] = getProjectDefaultDatetime(project)
                setMeet({
                    ...meet,
                    projectId: project.id,
                    datetime,
                    endDatetime,
                })
                handleNext()
            }}/>)}
        </div>
    );
}