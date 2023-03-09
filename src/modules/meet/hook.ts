import {Meet, NewMeet} from "./types";
import {useMutation, useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import service, {UseMutate} from "../../tools/service";
import {User} from "../user";
import {useUnit} from "../../tools/hooks";

export const useMeets = (): UseQueryResult<Meet[]> => {
    return useQuery(['meets'], () => service.get(`/meet`),)
}
export const useMeetUsers = (id: number): UseQueryResult<User[]> => {
    return useQuery(['meetUsers', id], () => service.get(`/meet/${id}/users`),)
}

export const useAddMeet = (): UseMutate<NewMeet> => useMutation((meet) => service.post("/meet", meet))

interface MeetUser {
    meetId: number
    userId?: number
}
// export const useAddMeetUser = (): UseMutate<MeetUser> => useMutation(({ userId = 1, meetId }) => service.post("/meets/" + meetId + '/user/' + userId))
// export const useDeleteMeetUser = (): UseMutate<MeetUser> => useMutation(({ userId = 1, meetId }) => service.delete("/meets/" + meetId + '/user/' + userId))


export const useAddMeetUser = (projectId?: number): UseMutate<MeetUser> => {
    const user = useUnit();
    const queryClient = useQueryClient()
    return useMutation(({ meetId }) => service.post("/meet/" + meetId + '/user/' + user.id), {
        onSuccess() {
            queryClient.invalidateQueries(['userMeets'])
            queryClient.invalidateQueries(['projectMeets', projectId])
        },
    })
}
export const useDeleteMeetUser = (projectId?: number): UseMutate<MeetUser> => {
    const user = useUnit();
    const queryClient = useQueryClient()
    return useMutation(({ meetId }) => service.delete("/meet/" + meetId + '/user/' + user.id), {
        onSuccess() {
            queryClient.invalidateQueries(['userMeets'])
            queryClient.invalidateQueries(['projectMeets', projectId])
        },
    })
}