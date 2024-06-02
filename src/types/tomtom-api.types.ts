export interface SearchLocatinByNameResponse {
  summary: Summary;
  results: Result[];
}

export interface Summary {
  query: string;
  queryType: string;
  queryTime: number;
  numResults: number;
  offset: number;
  totalResults: number;
  fuzzyLevel: number;
  queryIntent: any[];
}

export interface Result {
  type: string;
  id: string;
  score: number;
  address: Address;
  position: Position;
  viewport: Viewport;
  entryPoints: EntryPoint[];
}

export interface Address {
  streetNumber: string;
  streetName: string;
  municipalitySubdivision?: string;
  municipality: string;
  countrySecondarySubdivision: string;
  countryTertiarySubdivision: string;
  countrySubdivision: string;
  countrySubdivisionName: string;
  countrySubdivisionCode: string;
  postalCode: string;
  countryCode: string;
  country: string;
  countryCodeISO3: string;
  freeformAddress: string;
  localName: string;
  neighbourhood?: string;
}

export interface Position {
  lat: number;
  lon: number;
}

export interface Viewport {
  topLeftPoint: TopLeftPoint;
  btmRightPoint: BtmRightPoint;
}

export interface TopLeftPoint {
  lat: number;
  lon: number;
}

export interface BtmRightPoint {
  lat: number;
  lon: number;
}

export interface EntryPoint {
  type: string;
  position: Position2;
}

export interface Position2 {
  lat: number;
  lon: number;
}
