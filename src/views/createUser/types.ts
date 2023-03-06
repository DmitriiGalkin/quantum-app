import {NewUser} from "../../modules/user";

export interface UserStepProps {
    user: NewUser
    setUser: (user: NewUser) => void
    handleBack: () => void
    handleNext: () => void
    step?: number
}