//

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SearchLocatinByNameResponse } from 'src/types/tomtom-api.types';

@Injectable()
export class TomTomApiService {
  async searchByLocationName(
    query: string,
  ): Promise<SearchLocatinByNameResponse['results'][0] | null> {
    const res = await fetch(
      `https://api.tomtom.com/search/2/search/${query}.json?key=${process.env.TOMTOM_API_TOKEN}`,
    );
    if (!res.ok) {
      throw new InternalServerErrorException('Geolocation service is down');
    }
    const json: SearchLocatinByNameResponse = await res.json();
    return json.results[0];
  }
}
