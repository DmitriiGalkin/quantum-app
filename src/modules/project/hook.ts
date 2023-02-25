import {DefaultProject, Project} from "./types";
import {PLACES} from "../place/data";
import {Place} from "../place/types";
import {getProjects, PROJECTS} from "./data";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {User} from "../user/types";
import service from "../../tools/service";
import {Unique} from "../unique/types";
import {Meet} from "../meet/types";

export const useProjects = (): UseQueryResult<Project[]> => {
    return useQuery(['projects'], () => service.get(`/projects`),)
}
export const useProject = (id: number): UseQueryResult<Project> => {
    return useQuery(['project', id], () => service.get(`/projects/${id}`),)
}
export const useProjectMeets = (id: number): UseQueryResult<Meet[]> => {
    return useQuery(['projectMeets', id], () => service.get(`/projects/${id}/meets`),)
}
export const useProjectUsers = (id: number): UseQueryResult<User[]> => {
    return useQuery(['projectUsers', id], () => service.get(`/projects/${id}/users`),)
}
