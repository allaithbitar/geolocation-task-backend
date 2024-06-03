import { MailerService } from '@nestjs-modules/mailer';
import {
  Body,
  Controller,
  HttpCode,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { SearchDto } from 'src/DTO/search.dto';
import { TomTomApiService } from 'src/integrations/tomtom-api.service';
import { GeolocationService } from 'src/services/geolocation/geolocation.service';

@Controller('geolocation')
export class GeolocationController {
  constructor(
    private geolocationService: GeolocationService,
    private tomtomApiService: TomTomApiService,
    private mailService: MailerService,
  ) {}
  @Post('/search')
  @HttpCode(200)
  async SearchLocationByName(@Body() searchDto: SearchDto) {
    let result = await this.geolocationService.GetLocationByAddress(
      searchDto.address,
    );
    if (!result) {
      const searchResult = await this.tomtomApiService.searchByLocationName(
        searchDto.address,
      );

      if (searchResult) {
        result = await this.geolocationService.SaveLocation({
          address: searchDto.address,
          long: searchResult.position.lon,
          lat: searchResult.position.lat,
        });
      }
    }
    if (searchDto.sendResultViaMail && searchDto.email && result) {
      try {
        await this.mailService.sendMail({
          from: 'solzed@mail.ru',
          to: searchDto.email,
          subject: 'Geolocation Search Result',
          html: `<table>
                 <thead>
                 <tr>
                 <th>Location</th>
                 <th>Longitude</th>
                 <th>Latitude</th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                 <td>${result.query}</td>
                 <td>${result.long}</td>
                 <td>${result.lat}</td>
                 </tr>
                 </table>`,
        });
      } catch (error) {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: 'Internal Server Error',
          message: 'Mail service error',
          deails: error.message,
        });
      }
    }

    return result;
  }
}
