import {Group} from "../group/types";

export interface DefaultProject {
    id: number,
    groupId: number,
    title: string,
    image: string,
    description: string,
    active?: boolean, // флаг участия пользователя в проекте
    favorite?: boolean, // флаг добавления в избранное
}

export interface Project extends DefaultProject {
    group: Group
}
