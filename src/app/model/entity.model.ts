import {User} from './user';

export class Entity{
uuid:string;
kind: string;
owner: User;
validation_state: string;
last_update: string;
date_of_creation:string;
properties: Array<any>;
}
