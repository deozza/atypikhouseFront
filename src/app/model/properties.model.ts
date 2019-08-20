export class  Properties {

       title: string ;
       // tslint:disable-next-line: variable-name
       estate_category: string ;
       description: string ;
       surface: number;
       rooms: number;
       price: number;
       utilities: string [] ;
       beds: number;
       // tslint:disable-next-line: variable-name
       bath_room: number;
       environment: string [] ;
       city: string ;
       address: string ;
       // tslint:disable-next-line: variable-name
       postal_code: string ;
       country: string ;
       // tslint:disable-next-line: variable-name
       legal_id: string ;

       constructor(entity = null)  {

        this.title = entity !== null ? entity.title : '';
        this.estate_category = entity !== null ? entity.estate_category : '';
        this.description = entity !== null ? entity.description : '';
        this.surface = entity !== null ? entity.surface : null;
        this.rooms = entity !== null ? entity.rooms : null;
        this.price = entity !== null ? entity.price : null;
        this.utilities = entity !== null ? entity.utilities : [];
        this.beds = entity !== null ? entity.beds : null;
        this.bath_room = entity !== null ? entity.bath_room : null;
        this.environment = entity !== null ? entity.environment : [];
        this.city = entity !== null ? entity.city : '';
        this.address = entity !== null ? entity.address : '';
        this.postal_code = entity !== null ? entity.postal_code : '';
        this.country = entity !== null ? entity.country : '';
        this.legal_id = entity !== null ? entity.legal_id : '';

      }


  }


