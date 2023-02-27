import {useQuery, UseQueryResult} from "@tanstack/react-query";
import service from "../../tools/service";
import {Task} from "./types";

export const useTasks = (): UseQueryResult<Task[]> => {
    return useQuery(['tasks'], () => service.get(`/tasks`),)
}