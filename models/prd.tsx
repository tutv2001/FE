export interface Tprd {
    _id?: string,
    name?: string,
    image: string
    price?: string |number
    desc?: string
    slug: string
    categoryId: {
        name: string
    }
    sliderId: string
}
export interface userErr {
    error: "string"
}