export class Notification {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public read?: string,
        public idUser?: number,
        public userEmail?: string) { }
}
