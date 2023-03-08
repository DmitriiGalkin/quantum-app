import {NewUser, User} from "./types";
import {useMutation, useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import service, {UseMutate} from "../../tools/service";
import {Unique} from "../unique/types";
import {Project} from "../project/types";
import {LoginData} from "../../tools/hooks";

export const useUser = (id: number): UseQueryResult<User> => {
    return useQuery(['user', id], () => service.get(`/user/${id}`),)
}
export const useUserUniques = (id: number): UseQueryResult<Unique[]> => {
    return useQuery(['userUniques', id], () => service.get(`/user/${id}/unique`),)
}
export const useUserProjects = (id: number): UseQueryResult<Project[]> => {
    return useQuery(['userProjects', id], () => service.get(`/user/${id}/project`),)
}

export const useAddUser = (): UseMutate<NewUser> => useMutation((user) => service.post("/user", user))

export const useEditUser = (userId: number): UseMutate<User> => {
    const queryClient = useQueryClient()
    return useMutation((user) => service.put(`/user/${user.id}`, user), {
        onSuccess() {
            queryClient.invalidateQueries(['user', userId])
        },
    })
}

// export const useUserByLogin = (data: LoginData): UseQueryResult<User> => {
//     return useQuery(['user', data.email, data.password], () => service.get(`/users/login`, {params: {...data}}),)
// }
export const useUserByLogin = (): UseMutate<LoginData> => useMutation((data) => service.post("/user/login", data))
