import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';
export class CreatePhotoDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  filename: string;

  @IsNotEmpty()
  @IsNumber()
  views: number;

  @IsNotEmpty()
  @IsBoolean()
  isPublished: boolean;
}
