import {AgeLimit} from "../place/types";

export interface Project {
    id: number,
    placeId: number | null,
    title: string,
    image?: string,
    description: string,
    active?: boolean, // пользователь является участником проекта
    favorite?: boolean, // пользователь добавил проект в избранное
    ageLimit?: AgeLimit // Возрастное ограничение
}
