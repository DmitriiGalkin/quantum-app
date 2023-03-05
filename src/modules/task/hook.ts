import {useQuery, UseQueryResult} from "@tanstack/react-query";
import service from "../../tools/service";
import {Task} from "./types";
import {User} from "../user";

export const useTask = (id: number): UseQueryResult<User> => {
    return useQuery(['task', id], () => service.get(`/tasks/${id}`),)
}
export const useTasks = (): UseQueryResult<Task[]> => {
    return useQuery(['tasks'], () => service.get(`/tasks`),)
}