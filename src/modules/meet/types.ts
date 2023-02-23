import {User} from "../user/types";
import {Project} from "../project/types";

export interface Meet {
    id: number
    active?: boolean
    datetime: string
    title?: string
    image?: string
    description?: string
    project: Project
    users: User[]
}