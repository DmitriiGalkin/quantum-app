import {useMutation, useQuery, UseQueryResult} from "@tanstack/react-query";
import service, {UseMutate} from "../../tools/service";
import {NewPlace, Place} from "./types";
import {Project} from "../project/types";

export const usePlaces = (): UseQueryResult<Place[]> => {
    return useQuery(['places'], () => service.get(`/place`),)
}
export const usePlace = (id: number): UseQueryResult<Place> => {
    return useQuery(['place', id], () => service.get(`/place/${id}`),)
}
export const usePlaceProjects = (id: number): UseQueryResult<Project[]> => {
    return useQuery(['placeProjects', id], () => service.get(`/place/${id}/project`),)
}

export const useAddPlace = (): UseMutate<NewPlace> => useMutation((place) => service.post("/place", place))
