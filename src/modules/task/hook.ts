import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {Project} from "../project/types";
import service from "../../tools/service";
import {Task} from "./types";

export const useTasks = (): UseQueryResult<Task[]> => {
    return useQuery(['tasks'], () => service.get(`/tasks`),)
}