export class Password {
  first_options: string ;
  second_options: string;


  public constructor(entity = null) {
    this.first_options      = entity !== null ? entity.first_options    : '';
    this.second_options     = entity !== null ? entity.second_options   : '';
  }
 }
