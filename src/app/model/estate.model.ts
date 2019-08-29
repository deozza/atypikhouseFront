import { User } from './user.model';
import {Properties} from './properties.model';


export class Estate {
       uuid: string ;
       kind: string;
       owner: User;
       validation_state: string;
       last_update: string;
       date_of_creation: string;
       properties:Properties;

    public constructor(entity = null) {
      this.uuid = entity !== null ? entity.uuid : '';
      this.kind = entity !== null ? entity.kind : '';
      this.owner = entity !== null ? new User(entity.owner) : new User();
      this.validation_state = entity !== null ? entity.validation_state : '';
      this.last_update = entity !== null ? entity.last_update : '';
      this.date_of_creation = entity !== null ? entity.date_of_creation : '';
      this.properties = entity !== null ? new Properties(entity.properties) : new Properties();
    }

    public cleanEstate() {
      const estate = new Estate(this);
      delete estate.uuid;
      delete estate.kind;
      delete estate.owner;
      return  estate ;
    }


}
