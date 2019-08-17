export class Estate {
    title: string;
    estate_category: Array<string>;
    description: string;
    surface: number;
    rooms: number;
    price: number;
    image: File;
    utilities: Array<string>;
    beds: number;
    bath_rooms: number;
    environment: Array<string>;
    city: string;
    address: string;
    postal_code: string;
    country: string;
    legal_id:string = null ;
}
