import {NewPlace} from "../../modules/place";

export interface PlaceStepProps {
    place: NewPlace
    setPlace: (place: NewPlace) => void
    handleBack: () => void
    handleNext: () => void
    step?: number
}