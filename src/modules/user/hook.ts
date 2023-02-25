import {User} from "./types";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import service from "../../tools/service";
import {Unique} from "../unique/types";

export const useUser = (id: number): UseQueryResult<User> => {
    return useQuery(['user', id], () => service.get(`/users/${id}`),)
}
export const useUserUniques = (id: number): UseQueryResult<Unique[]> => {
    return useQuery(['userUniques', id], () => service.get(`/users/${id}/uniques`),)
}
export const useUserProjects = (id: number): UseQueryResult<Project[]> => {
    return useQuery(['projectUsers', id], () => service.get(`/projects/${id}/users`),)
}
