import {Meet, NewMeet} from "./types";
import {useMutation, useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import service, {UseMutate} from "../../tools/service";
import {User} from "../user/types";

export const useMeets = (): UseQueryResult<Meet[]> => {
    return useQuery(['meets'], () => service.get(`/meets`),)
}
export const useMeetUsers = (id: number): UseQueryResult<User[]> => {
    return useQuery(['meetUsers', id], () => service.get(`/meets/${id}/users`),)
}

export const useAddMeet = (): UseMutate<NewMeet> => useMutation((meet) => service.post("/meets", meet))

interface MeetUser {
    meetId: number
    userId?: number
}
// export const useAddMeetUser = (): UseMutate<MeetUser> => useMutation(({ userId = 1, meetId }) => service.post("/meets/" + meetId + '/user/' + userId))
// export const useDeleteMeetUser = (): UseMutate<MeetUser> => useMutation(({ userId = 1, meetId }) => service.delete("/meets/" + meetId + '/user/' + userId))


export const useAddMeetUser = (projectId?: number): UseMutate<MeetUser> => {
    const queryClient = useQueryClient()
    return useMutation(({ userId = 1, meetId }) => service.post("/meets/" + meetId + '/user/' + userId), {
        onSuccess() {
            queryClient.invalidateQueries(['meets'])
            queryClient.invalidateQueries(['projectMeets', projectId])
        },
    })
}
export const useDeleteMeetUser = (projectId?: number): UseMutate<MeetUser> => {
    const queryClient = useQueryClient()
    return useMutation(({ userId = 1, meetId }) => service.delete("/meets/" + meetId + '/user/' + userId), {
        onSuccess() {
            queryClient.invalidateQueries(['meets'])
            queryClient.invalidateQueries(['projectMeets', projectId])
        },
    })
}