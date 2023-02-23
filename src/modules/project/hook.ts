import {DefaultProject, Project} from "./types";
import {GROUPS} from "../group/data";
import {Group} from "../group/types";
import {getProjects, PROJECTS} from "./data";

export const useProject = (id: number): Project => {
    const defaultProject = PROJECTS.find((project) => project.id === id) || {} as DefaultProject
    return ({ ...defaultProject, group: GROUPS.find((group) => group.id === defaultProject.groupId) || {} as Group })
}

export const useProjects = (): Project[] => {
    return getProjects()
}

export const useGroupProjects = ({ groupId }: { groupId: number }): Project[] => {
    return getProjects().filter((p) => p.group.id === groupId)
}