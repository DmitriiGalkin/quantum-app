import {useMutation, useQuery, UseQueryResult} from "@tanstack/react-query";
import service, {UseMutate} from "../../tools/service";
import {Task} from "./types";
import {NewUser, User} from "../user";

export const useTask = (id: number): UseQueryResult<User> => {
    return useQuery(['task', id], () => service.get(`/tasks/${id}`),)
}
export const useTasks = (): UseQueryResult<Task[]> => {
    return useQuery(['tasks'], () => service.get(`/tasks`),)
}

export const useEditTask = (): UseMutate<any> => useMutation((task) => service.put(`/tasks/${task.id}`, task))
