import {useMutation, useQuery, UseQueryResult} from "@tanstack/react-query";
import service, {UseMutate} from "../../tools/service";
import {NewPlace, Place} from "./types";
import {Project} from "../project/types";
import {NewMeet} from "../meet";

export const usePlaces = (): UseQueryResult<Place[]> => {
    return useQuery(['places'], () => service.get(`/places`),)
}
export const usePlace = (id: number): UseQueryResult<Place> => {
    return useQuery(['place', id], () => service.get(`/places/${id}`),)
}
export const usePlaceProjects = (id: number): UseQueryResult<Project[]> => {
    return useQuery(['placeProjects', id], () => service.get(`/places/${id}/projects`),)
}

export const useAddPlace = (): UseMutate<NewPlace> => useMutation((place) => service.post("/places", place))
