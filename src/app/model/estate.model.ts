import { User } from './user.model';
import {Properties} from './properties.model';


export class Estate {
       uuid: string ;
       kind: string;
       owner: User;
       validation_state: string;
       last_update: string;
       date_of_creation: string;
       title: string;
       estate_category: string;
       description: string;
       surface: number;
       rooms: number;
       price: number;
       image: string[];
       utilities: string[];
       beds: number;
       bath_room: number;
       environment: string[];
       city: string;
       address: string;
       postal_code: string;
       country: string;
       legal_id: string;
       properties:Properties;

    public constructor(entity = null) {
      this.uuid = entity !== null ? entity.uuid : '';
      this.kind = entity !== null ? entity.kind : '';
      this.owner = entity !== null ? new User(entity.owner) : new User();
      this.validation_state = entity !== null ? entity.validation_state : '';
      this.last_update = entity !== null ? entity.last_update : '';
      this.date_of_creation = entity !== null ? entity.date_of_creation : '';
      this.title = entity !== null ? entity.title : '';
        this.estate_category = entity !== null ? entity.estate_category : '';
        this.description = entity !== null ? entity.description : '';
        this.surface = entity !== null ? entity.surface : null;
        this.rooms = entity !== null ? entity.rooms : null;
        this.price = entity !== null ? entity.price : '';
        this.image = entity !== null ? entity.image : [];
        this.utilities = entity !== null ? entity.utilities : [];
        this.beds = entity !== null ? entity.beds : null;
        this.bath_room = entity !== null ? entity.beds : null;
        this.environment = entity !== null ? entity.environment : [];
        this.city = entity !== null ? entity.city : '';
        this.address = entity !== null ? entity.address : '';
        this.postal_code = entity !== null ? entity.postal_code : '';
        this.country = entity !== null ? entity.country : '';
        this.legal_id = entity !== null ? entity.legal_id : '';
      this.properties = entity !== null ? new Properties(entity.properties) : new Properties();
    }

    public cleanEstate() {
      const estate = new Estate(this);
      delete estate.uuid;
      delete estate.kind;
      delete estate.owner;
      delete estate.validation_state;
      delete estate.last_update;
      delete estate.date_of_creation;
      delete estate.image;
      delete estate.properties;
      return  estate ;
    }


}
