import {NewUser, User} from "./types";
import {useMutation, useQuery, UseQueryResult} from "@tanstack/react-query";
import service, {UseMutate} from "../../tools/service";
import {Unique} from "../unique/types";
import {Project} from "../project/types";

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
