export default interface Property {
  id: number;
  name: string;
  antiquity: number;
  address: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  environments: number;
  pool: boolean;
  elevator: boolean;
  floor_th: number;
  orientation: string;
  m2_totals: number;
  m2_covered: number;
  garage: boolean;
  amenities: boolean;
  description: string;
  furnished: boolean;
  balcony: boolean;
  sign: boolean;
  lat: number;
  long: number;
  price: number;
  zone: string;
  deleted: boolean;
  firstImage: string;
  Conditions: any;
  Categories: any;
  States: any;
  Countries: any;
  Gardens: any;
  Services: any;
  Images: any;
}
