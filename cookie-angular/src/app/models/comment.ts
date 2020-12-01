export class Comment {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public createDate?: string,
        public idUser?: number,
        public userEmail?: string) { }
}
