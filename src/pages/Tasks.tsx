import React from 'react';
import {Box} from "@mui/material";
import TaskCard from "../components/TaskCard";
import {useOnlyUserTasks} from "../modules/task";

export default function TasksPage() {
    const { data: tasks = [] } = useOnlyUserTasks()

    return (
        <>
            {tasks.map((task) => <TaskCard key={task.id} {...task} />)}
            <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #E1E3E8',
                borderRadius: 2,
                padding: 2,
                marginBottom: 2,
            }}>
                Новых заданий нет, - задания появляются со временем или после продвижения проектов
            </Box>
        </>
    );
}
