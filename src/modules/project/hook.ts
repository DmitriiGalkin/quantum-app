import {Project} from "./types";
import {useMutation, useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import {User} from "../user";
import service, {UseMutate} from "../../tools/service";
import {Meet} from "../meet";

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

export const useAddProject = (): UseMutate<Project> => useMutation((project) => service.post("/projects", project))
export const useUpdateProject = (): UseMutate<Project> => useMutation((project) => service.put(`/projects/${project.id}`, project))

interface ProjectUser {
    projectId: number
    userId?: number
}
// export const useAddProjectUser = (): UseMutate<ProjectUser> => useMutation(({ userId = 1, projectId }) => service.post("/projects/" + projectId + '/user/' + userId))
// export const useDeleteProjectUser = (): UseMutate<ProjectUser> => useMutation(({ userId = 1, projectId }) => service.delete("/projects/" + projectId + '/user/' + userId))

export const useAddProjectUser = (projectId?: number): UseMutate<ProjectUser> => {
    const queryClient = useQueryClient()
    return useMutation(({ userId = 1, projectId }) => service.post("/projects/" + projectId + '/user/' + userId), {
        onSuccess() {
            queryClient.invalidateQueries(['projectUsers', projectId])
        },
    })
}
export const useDeleteProjectUser = (projectId?: number): UseMutate<ProjectUser> => {
    const queryClient = useQueryClient()
    return useMutation(({ userId = 1, projectId }) => service.delete("/projects/" + projectId + '/user/' + userId), {
        onSuccess() {
            queryClient.invalidateQueries(['projectUsers', projectId])
        },
    })
}