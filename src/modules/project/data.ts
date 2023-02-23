import {DefaultProject, Project} from "./types";
import {GROUPS} from "../group/data";
import {Group} from "../group/types";

export const PROJECTS: DefaultProject[] = [
    {
        id: 1,
        groupId: 1,
        title: 'Лего конструирование замка',
        image: 'project_lego.jpeg',
        description: 'Уютная проектна мастерская для детей',
        active: true,
        favorite: true,
    },
    {
        id: 2,
        groupId: 1,
        title: 'Изготовление светодиодных пеньков',
        image: 'project_pen.jpg',
        description: 'Уютный небольшой десткий центр для творчества',
        favorite: true,
    },
    {
        id: 3,
        groupId: 2,
        title: 'Рисование',
        image: 'group_tc.jpeg',
        description: 'Большое пространство для тренеровок и правктик',
        active: true,
    },
    {
        id: 4,
        groupId: 2,
        title: 'Изготовление свечей',
        image: 'group_kuhna.jpg',
        description: 'Мастера классы, изготовление ланчбоксов на неделю'
    },
    {
        id: 5,
        groupId: 3,
        title: 'Тренеровка тела',
        image: 'group_bana.jpeg',
        description: 'Парение для людей',
        active: true,
    },
    {
        id: 6,
        groupId: 3,
        title: 'Актерское мастерство',
        image: 'group_bana.jpeg',
        description: 'Парение для людей',
        favorite: true,
    },
    {
        id: 7,
        groupId: 4,
        title: 'Изготовление сладостей',
        image: 'project_cake.jpg',
        description: 'Парение для людей',
        active: true,
        favorite: true,
    },
    {
        id: 8,
        groupId: 5,
        title: 'Мужская баня',
        image: 'group_bana.jpeg',
        description: 'Парение для людей'
    },
    {
        id: 9,
        groupId: 5,
        title: 'Женская баня',
        image: 'group_bana.jpeg',
        description: 'Парение для людей'
    },
]
export const getProjects = (): Project[] => {
    return PROJECTS.map((project) => ({ ...project, group: GROUPS.find((group) => group.id === project.groupId) || {} as Group }))
}