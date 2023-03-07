import {NewUser, User} from "./types";
import {useMutation, useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import service, {UseMutate} from "../../tools/service";
import {Unique} from "../unique/types";
import {Project} from "../project/types";
import {LoginData} from "../../tools/hooks";

export const useUser = (id: number): UseQueryResult<User> => {
    return useQuery(['user', id], () => service.get(`/users/${id}`),)
}
export const useUserUniques = (id: number): UseQueryResult<Unique[]> => {
    return useQuery(['userUniques', id], () => service.get(`/users/${id}/uniques`),)
}
export const useUserProjects = (id: number): UseQueryResult<Project[]> => {
    return useQuery(['userProjects', id], () => service.get(`/users/${id}/projects`),)
}

export const useAddUser = (): UseMutate<NewUser> => useMutation((user) => service.post("/users", user))
//export const useEditUser = (): UseMutate<any> => useMutation((user) => service.put(`/users/${user.id}`, user))

export const useEditUser = (userId: number): UseMutate<User> => {
    const queryClient = useQueryClient()
    return useMutation((user) => service.put(`/users/${user.id}`, user), {
        onSuccess() {
            queryClient.invalidateQueries(['user', userId])
        },
    })
}

// export const useUserByLogin = (data: LoginData): UseQueryResult<User> => {
//     return useQuery(['user', data.email, data.password], () => service.get(`/users/login`, {params: {...data}}),)
// }
export const useUserByLogin = (): UseMutate<LoginData> => useMutation((data) => service.post("/users/login", data))
