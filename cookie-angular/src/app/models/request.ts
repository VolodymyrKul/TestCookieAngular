export class Request {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public price?: string,
        public createDate?: string,
        public endDate?: string,
        public status?: string,
        public prevStatus?: string,
        public notApproveUsers?: number,
        public idUser?: number,
        public userEmail?: string) { }
}
