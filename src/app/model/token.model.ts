export class Token {
  uuid: string ;
  token: string;

  public constructor(entity = null) {
    this.uuid = entity !== null ? entity.uuid : '';
    this.kind = entity !== null ? entity.kind : '';
 }
