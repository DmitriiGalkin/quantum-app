import {User} from "../user/types";
import {Project} from "../project/types";

export interface Meet {
    id: number
    title?: string
    description?: string
    datetime: string
    active?: boolean
    image?: string
    projectId: number
    project: Project
    users: User[]
}

export interface NewMeet {
    title?: string
    description?: string
    datetime: string
    image: string | null
    projectId: number | null
    startDatetime: string,
    endDatetime?: string,
}