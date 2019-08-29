export class Password {
  first: string ;
  second: string;


  public constructor(entity = null) {
    this.first      = entity !== null ? entity.first    : '';
    this.second     = entity !== null ? entity.second   : '';
  }
 }
