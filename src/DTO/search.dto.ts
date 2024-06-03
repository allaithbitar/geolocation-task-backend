import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
} from 'class-validator';
export class SearchDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  sendResultViaMail: boolean;
}
