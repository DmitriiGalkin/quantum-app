import {useQuery, UseQueryResult} from "@tanstack/react-query";
import service from "../../tools/service";
import {Place} from "./types";
import {Project} from "../project/types";

export const usePlaces = (): UseQueryResult<Place[]> => {
    return useQuery(['places'], () => service.get(`/places`),)
}
export const usePlace = (id: number): UseQueryResult<Place> => {
    return useQuery(['place', id], () => service.get(`/places/${id}`),)
}
export const usePlaceProjects = (id: number): UseQueryResult<Project[]> => {
    return useQuery(['placeProjects', id], () => service.get(`/places/${id}/projects`),)
}
