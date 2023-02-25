import {Meet} from "./types";
import {getMeets} from "./data";
import {useMutation, useQuery, UseQueryResult} from "@tanstack/react-query";
import {Place} from "../place/types";
import service, {UseMutate} from "../../tools/service";
import {User} from "../user/types";
import axios from "axios";

export const useMeets = (): UseQueryResult<Meet[]> => {
    return useQuery(['meets'], () => service.get(`/meets`),)
}
export const useMeetUsers = (id: number): UseQueryResult<User[]> => {
    return useQuery(['meetUsers', id], () => service.get(`/meets/${id}/users`),)
}

interface MeetUser {
    meetId: number
    userId?: number
}
export const useAddMeetUser = (): UseMutate<MeetUser> => useMutation(({ userId = 1, meetId }) => service.post("/meets/" + meetId + '/user/' + userId))
export const useDeleteMeetUser = (): UseMutate<MeetUser> => useMutation(({ userId = 1, meetId }) => service.delete("/meets/" + meetId + '/user/' + userId))