import {User} from "../user/types";

export interface Meet {
    id: number
    title?: string
    description?: string
    datetime: string
    active?: boolean
    image?: string
    projectId: number
}

export interface NewMeet {
    title?: string
    description?: string
    datetime: string
    image: string | null
    projectId: number | null
}