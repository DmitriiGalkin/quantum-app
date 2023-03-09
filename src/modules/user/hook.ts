import {User} from "./types";
import {useMutation, useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import service, {UseMutate} from "../../tools/service";
import {Unique} from "../unique";
import {Project} from "../project";
import {LoginData, useUnit} from "../../tools/hooks";
import {Meet} from "../meet";

export const useUser = (id: number): UseQueryResult<User> => {
    return useQuery(['user', id], () => service.get(`/user/${id}`),)
}
export const useUserUniques = (id: number): UseQueryResult<Unique[]> => {
    return useQuery(['userUniques', id], () => service.get(`/user/${id}/unique`),)
}
export const useUserProjects = (id: number): UseQueryResult<Project[]> => {
    return useQuery(['userProjects', id], () => service.get(`/user/${id}/project`),)
}

export const useAddUser = (): UseMutate<User> => useMutation((user) => service.post("/user", user))
export const useUpdateUser = (): UseMutate<User> => useMutation((user) => service.put(`/user/${user.id}`, user))

export const useEditUser = (userId: number): UseMutate<User> => {
    const queryClient = useQueryClient()
    return useMutation((user) => service.put(`/user/${user.id}`, user), {
        onSuccess() {
            queryClient.invalidateQueries(['user', userId])
        },
    })
}

export const useUserByLogin = (): UseMutate<LoginData> => useMutation((data) => service.post("/user/login", data))


export const useUserMeet = (): UseQueryResult<Meet[]> => {
    const user = useUnit();
    return useQuery(['userMeets', user.id], () => service.get(`/user/${user.id}/allMeet`))
}
