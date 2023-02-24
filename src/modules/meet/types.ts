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
    users: User[]
}