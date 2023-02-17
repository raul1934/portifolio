export default interface Project {
    name: string,
    cover: string,
    paragraphs: Array<string>,
    list: Array<string>,
    techs: Array<string>,
    github?: string,
    images: Array<string>,
    twoCols?: boolean
}