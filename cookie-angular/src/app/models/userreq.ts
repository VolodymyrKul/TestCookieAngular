export class Userreq {
    constructor(
        public id?: number,
        public idApproveUser?: number,
        public idRequest?: number,
        public idComment?: number,
        public approveUserEmail?: string,
        public requestTitle?: string,
        public commentTitle?: string,
        public approveStatus?: string) { }
}
