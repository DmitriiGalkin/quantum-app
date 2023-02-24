import {USERS} from "../user/data";
import {User} from "../user/types";
import {getProjects} from "../project/data";
import {Project} from "../project/types";
import {Meet} from "./types";

export interface DefaultMeet {
    id: number
    projectId: number
    datetime: string
    title: string
    active: boolean
    userIds: number[]
}
const MEETS: DefaultMeet[] = []

export const getMeets = (): Meet[] => {
    return MEETS.map((meet) => ({ ...meet, project: getProjects().find((project) => project.id === meet.projectId) || {} as Project, users: meet.userIds.map((userId) => USERS.find(({ id }) => id === userId) || {} as User) }))
}