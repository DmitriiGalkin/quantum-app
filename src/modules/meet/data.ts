import {USERS} from "../user/data";
import {User} from "../user/types";
import {getProjects} from "../project/data";
import {Project} from "../project/types";
import {Meet} from "./types";

const MEETS = [
    { id: 1, projectId: 1, datetime: "2023-02-13T04:43:57", title: 'Выбор темы замка', active: true, userIds: [1,2,3,4] },
    { id: 2, projectId: 2, datetime: "2023-02-13T04:43:57", title: 'Выбор и заказ светодиодной ленты', userIds: [1,2,3,4] },
    { id: 3, projectId: 2, datetime: "2023-02-13T04:43:57", title: 'Подготовка дерева', active: true, userIds: [1,2,3,4] },
    { id: 4, projectId: 2, datetime: "2023-02-13T04:43:57", title: 'Заливка эпоксидной смолой', userIds: [1,2,3,4] },
    { id: 5, projectId: 3, datetime: "2023-02-13T04:43:57", title: 'Геометрические фигуры', active: true, userIds: [1,2,3,4] },
    { id: 6, projectId: 4, datetime: "2023-02-13T04:43:57", title: 'Насыпные свечи из шариков', userIds: [1,2,3,4] },
    { id: 7, projectId: 7, datetime: "2023-02-13T04:43:57", title: 'Печенье картошка', userIds: [1,2,3,4] },
]

export const getMeets = (): Meet[] => {
    return MEETS.map((meet) => ({ ...meet, project: getProjects().find((project) => project.id === meet.projectId) || {} as Project, users: meet.userIds.map((userId) => USERS.find(({ id }) => id === userId) || {} as User) }))
}