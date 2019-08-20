
export class User {
  uuid: string;
  username: string;
  token: '';
  password = {
    first: null,
    second: null
  };
  email: string;
  active: boolean;

  constructor(user = null)  {
    this.uuid = user !== null ? user.uuid : '';
    this.username = user !== null ? user.username: '';
    this.token = user !== null ? user.token : '';
    this.password = user !== null ? user.password: '';
    this.email = user !== null ? user.email: '';
    this.active = user !== null ? user.active: false;


  }

public cleanUser() {
  let user = new User(this);
  delete user.uuid;
  delete user.token;
  return  user ;
}
 }
