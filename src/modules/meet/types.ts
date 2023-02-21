import {User} from "../user/types";
import {Project} from "../project/types";

export interface Meet {
    id: number
    datetime: string
    title?: string
    image?: string
    description?: string
    project: Project
    users: User[]
}