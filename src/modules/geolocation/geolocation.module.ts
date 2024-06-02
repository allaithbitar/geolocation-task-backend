import { Module } from '@nestjs/common';
import { GeolocationController } from 'src/controllers/geolocation/geolocation.controller';
import { TomTomApiService } from 'src/integrations/tomtom-api.service';
import { GeolocationService } from 'src/services/geolocation/geolocation.service';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [GeolocationController],
  providers: [GeolocationService, TomTomApiService, PrismaService],
})
export class GeolocationModule {}
