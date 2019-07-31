export interface Estate {
    title: string;
    estate_category: Array<string>;
    description: string;
    surface: number;
    rooms: number;
    bath_rooms: number;
    city: string;
    utilities: Array<string>;
    price: number;
    image: File;
    beds: number;
    environment: Array<string>;
    address: string;
    postal_code: string;
    country: string;
    legal_id: string;
}
