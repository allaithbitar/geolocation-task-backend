import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsOptional } from 'class-validator';
export class SearchDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  email: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  sendResultViaMail: boolean;
}
