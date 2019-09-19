import { Password } from './password.model';

export class User{
  uuid: string;
  email: string;
  username: string;
  active:boolean;
  roles:string[];
  newPassword:Password;
  last_login:string;
  last_failed_login:string;
  register_date:string;
  plainPassword:string;
  password: Password;


  public constructor(entity = null){
    this.uuid              = entity !== null ? entity.uuid              : "";
    this.email             = entity !== null ? entity.email             : "";
    this.username          = entity !== null ? entity.username          : "";
    this.roles             = entity !== null ? entity.roles             : [];
    this.active            = entity !== null ? entity.active            : false;
    this.newPassword       = entity !== null ? new Password(entity.newPassword) : new Password();
    this.last_login        = entity !== null ? entity.last_login        : "";
    this.last_failed_login = entity !== null ? entity.last_failed_login : "";
    this.register_date     = entity !== null ? entity.register_date     : "";
    this.plainPassword     = entity !== null ? entity.plainPassword     : "";
    this.password          = entity !== null ? new Password(entity.password) : new Password();

  }

  public postableUser() :User{
    let user = new User(this);
    delete user.uuid;
    delete user.roles;
    delete user.active;
    delete user.newPassword;
    delete user.last_login;
    delete user.last_failed_login;
    delete user.register_date;
    delete user.plainPassword;

    return user;

  }

  public patchableCurrent() :User{
    let user = new User(this);
    delete user.uuid;
    delete user.roles;
    delete user.active;
    delete user.password;
    delete user.last_login;
    delete user.last_failed_login;
    delete user.register_date;

    return user;

  }

  public patchableSpecific() :User{
    let user = new User(this);
    delete user.uuid;
    delete user.plainPassword;
    delete user.last_login;
    delete user.last_failed_login;
    delete user.register_date;
    delete user.password;

    return user;

  }

}
