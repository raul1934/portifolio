export default interface Education {
    course: string,
    instituition: string,
    description: string,
    initialDate: Date,
    finalDate: Date | undefined,
    list: string[],
}