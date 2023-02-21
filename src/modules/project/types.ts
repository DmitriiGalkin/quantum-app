import {Group} from "../group/types";

export interface Project {
    id: number
    group: Group
    title: string
    image: string
    description?: string
}