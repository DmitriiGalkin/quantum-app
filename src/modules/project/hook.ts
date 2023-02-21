import {Project} from "./types";
import {GROUPS} from "../group/hook";
import {Group} from "../group/types";

export const PROJECTS = [
    {
        id: 1,
        groupId: 1,
        title: 'Лего конструирование замка',
        image: 'project_lego.jpeg',
        description: 'Уютная проектна мастерская для детей'
    },
    {
        id: 2,
        groupId: 1,
        title: 'Изготовление светодиодных пеньков',
        image: 'project_cake.jpg',
        description: 'Уютный небольшой десткий центр для творчества'
    },
    {
        id: 3,
        groupId: 2,
        title: 'Рисование',
        image: 'group_tc.jpeg',
        description: 'Большое пространство для тренеровок и правктик'
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
        description: 'Парение для людей'
    },
    {
        id: 6,
        groupId: 3,
        title: 'Актерское мастерство',
        image: 'group_bana.jpeg',
        description: 'Парение для людей'
    },
    {
        id: 7,
        groupId: 4,
        title: 'Изготовление сладостей',
        image: 'project_cake.jpeg',
        description: 'Парение для людей'
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

export const useProjects = (): Project[] => {
    return getProjects()
}

export const useGroupProjects = ({ groupId }: { groupId: number }): Project[] => {
    return getProjects().filter((p) => p.group.id === groupId)
}