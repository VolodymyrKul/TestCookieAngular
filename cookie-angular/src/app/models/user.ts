export class User {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public password?: string,
        public birthdate?: string,
        public registerDate?: string,
        public notificationPermission?: string,
        public iduserrole?: number,
        public userRoleTitle?: string) { }
}
