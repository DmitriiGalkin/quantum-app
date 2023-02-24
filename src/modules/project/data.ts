import {DefaultProject, Project} from "./types";
import {PLACES} from "../place/data";
import {Place} from "../place/types";

export const PROJECTS: DefaultProject[] = [

]
export const getProjects = (): Project[] => {
    return PROJECTS.map((project) => ({ ...project, group: PLACES.find((group) => group.id === project.groupId) || {} as Place }))
}