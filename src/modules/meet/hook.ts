import {Meet} from "./types";
import {USERS} from "../user/hook";
import {User} from "../user/types";
import {getProjects} from "../project/hook";
import {Project} from "../project/types";

const MEETS = [
    { id: 1, projectId: 1, datetime: "2023-02-13T04:43:57", title: 'Выбор темы замка', userIds: [1,2,3,4] },
    { id: 2, projectId: 2, datetime: "2023-02-13T04:43:57", title: 'Выбор и заказ светодиодной ленты', userIds: [1,2,3,4] },
    { id: 3, projectId: 2, datetime: "2023-02-13T04:43:57", title: 'Подготовка дерева', userIds: [1,2,3,4] },
    { id: 4, projectId: 2, datetime: "2023-02-13T04:43:57", title: 'Заливка эпоксидной смолой', userIds: [1,2,3,4] },
    { id: 5, projectId: 3, datetime: "2023-02-13T04:43:57", title: 'Геометрические фигуры', userIds: [1,2,3,4] },
    { id: 6, projectId: 4, datetime: "2023-02-13T04:43:57", title: 'Насыпные свечи из шариков', userIds: [1,2,3,4] },
    { id: 7, projectId: 7, datetime: "2023-02-13T04:43:57", title: 'Печенье картошка', userIds: [1,2,3,4] },
]

const getMeets = (): Meet[] => {
    return MEETS.map((meet) => ({ ...meet, project: getProjects().find((project) => project.id === meet.projectId) || {} as Project, users: meet.userIds.map((userId) => USERS.find(({ id }) => id === userId) || {} as User) }))
}

export const useMeets = (): Meet[] => {
    return getMeets()
}

export const useProjectMeets = ({ projectId }: { projectId: number }): Meet[] => {
    return getMeets().filter((meet) => meet.project.id === projectId)
}
