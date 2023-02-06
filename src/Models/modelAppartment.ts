export interface Appartment {
  id: string;
  title: string;
  cover: string;
  pictures: Array<string>;
  description: string;
  host: ApartmentHost;
  rating: number;
  location: string;
  equipments: Array<string>;
  tags: Array<string>;
}

interface ApartmentHost {
  name: string;
  picture: string;
}
