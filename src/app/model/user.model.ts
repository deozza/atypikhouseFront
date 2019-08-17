import {ApiToken} from './apiToken.model';

export class User {
  id: number;
  uuid: string;
  username: string;
  token: ApiToken;
  password = {
    first: null,
    second: null
  };
   email: string;
  active: boolean;
 }
