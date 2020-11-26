import { User } from './user'
export class Useraccess {
    constructor(
        public user?: User,
        public accessToken?: string
    ) { }
}
