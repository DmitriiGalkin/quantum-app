export interface User {
    id: number
    image?: string
    title: string
    points: number
}
export interface NewUser {
    email?: string
    password?: string
    title?: string
}