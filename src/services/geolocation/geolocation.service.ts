import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Result } from '@prisma/client';

@Injectable()
export class GeolocationService {
  constructor(private prismaService: PrismaService) {}
  async SaveLocation({
    address,
    long,
    lat,
  }: {
    address: string;
    long: number;
    lat: number;
  }): Promise<Result> {
    return await this.prismaService.result.create({
      data: {
        query: address,
        long,
        lat,
      },
    });
  }
  async GetLocationByAddress(address: string): Promise<Result | null> {
    return await this.prismaService.result.findFirst({
      where: { query: { equals: address } },
    });
  }
}
