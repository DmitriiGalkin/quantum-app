export interface User {
    id: number
    image: string
    title: string
}
export interface NewUser {
    email?: string
    password?: string
    title?: string
}