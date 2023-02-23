import {Meet} from "./types";
import {getMeets} from "./data";

export const useMeets = (): Meet[] => {
    return getMeets()
}

export const useProjectMeets = ({ projectId }: { projectId: number }): Meet[] => {
    return getMeets().filter((meet) => meet.project.id === projectId)
}
