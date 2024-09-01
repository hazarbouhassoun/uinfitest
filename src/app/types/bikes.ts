export interface Bike {
    id: number,
    title: string,
    description: string,
    date_stolen: number,
    stolen_location: string,
    thumb: string,
    type: string
}
export interface Count {
    non: number,
    stolen: number,
    proximity: number
}