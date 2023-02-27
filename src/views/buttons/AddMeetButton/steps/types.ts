import {Project} from "../../../../modules/project/types";
import {Meet, NewMeet} from "../../../../modules/meet/types";

export interface MeetStepProps {
    meet: NewMeet
    setMeet: (meet: NewMeet) => void
    handleBack: () => void
    handleNext: () => void
    step?: number
}