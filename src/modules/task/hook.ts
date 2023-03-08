import {useMutation, useQuery, UseQueryResult} from "@tanstack/react-query";
import service, {UseMutate} from "../../tools/service";
import {Task} from "./types";
import {User} from "../user";

export const useTask = (id: number): UseQueryResult<User> => {
    return useQuery(['task', id], () => service.get(`/task/${id}`),)
}
export const useTasks = (): UseQueryResult<Task[]> => {
    return useQuery(['tasks'], () => service.get(`/task`),)
}

export const useEditTask = (): UseMutate<any> => useMutation((task) => service.put(`/task/${task.id}`, task))
