import { Module } from '@nestjs/common';
import { GeolocationModule } from './modules/geolocation/geolocation.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    GeolocationModule,
    MailerModule.forRoot({
      transport: {
        service: process.env.MAIL_SERVICE,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
