export class User{
  uuid: string;
  email: string;
  username: string;
  active:boolean;
  roles:string[];
  newPassword:string;
  last_login:string;
  last_failed_login:string;
  register_date:string;

  public constructor(entity = null){
    this.uuid              = entity !== null ? entity.uuid              : "";
    this.email             = entity !== null ? entity.email             : "";
    this.username          = entity !== null ? entity.username          : "";
    this.roles             = entity !== null ? entity.roles             : [];
    this.active            = entity !== null ? entity.active            : false;
    this.newPassword       = entity !== null ? entity.newPassword       : "";
    this.last_login        = entity !== null ? entity.last_login        : "";
    this.last_failed_login = entity !== null ? entity.last_failed_login : "";
    this.register_date     = entity !== null ? entity.register_date     : "";

  }

}
