import {Project} from "../../modules/project/types";

export interface ProjectStepProps {
    project: Project,
    setProject: (project: Project) => void,
    handleBack: () => void, handleNext: () => void
}