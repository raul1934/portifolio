export default interface Experiency {
    name: string,
    company: string,
    active: boolean,
    initialDate: Date,
    finalDate: Date | undefined,
    description: string,
    techs: string[],
    list: string[]
}