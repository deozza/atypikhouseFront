export class Token {
  uuid: string ;
  token: string;

  public constructor(entity = null) {
    this.uuid = entity !== null ? entity.uuid : '';
    this.token = entity !== null ? entity.token : '';
  }

  public activateUser() :Token{
    let token = new Token(this);
    delete token.uuid;
    return token;

  }
 }
