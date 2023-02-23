import {DefaultProject, Project} from "./types";
import {PLACES} from "../place/data";
import {Place} from "../place/types";
import {getProjects, PROJECTS} from "./data";

export const useProject = (id: number): Project => {
    const defaultProject = PROJECTS.find((project) => project.id === id) || {} as DefaultProject
    return ({ ...defaultProject, group: PLACES.find((group) => group.id === defaultProject.groupId) || {} as Place })
}

export const useProjects = (): Project[] => {
    return getProjects()
}

export const useGroupProjects = ({ groupId }: { groupId: number }): Project[] => {
    return getProjects().filter((p) => p.group.id === groupId)
}