import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class UpdatePhotoDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  filename: string;

  @IsOptional()
  @IsNumber()
  views: number;

  @IsOptional()
  @IsBoolean()
  isPublished: boolean;
}
