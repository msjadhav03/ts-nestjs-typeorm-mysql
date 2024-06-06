import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { ApiTags } from '@nestjs/swagger';
import { VERSION } from 'src/common/constants';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@ApiTags('photo')
@Controller({
  version: VERSION,
})
@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post()
  create(@Body() data: CreatePhotoDto) {
    return this.photoService.create(data);
  }

  @Get()
  findAll() {
    return this.photoService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.photoService.findOne(id);
  }

  @Delete('/:id')
  deleteOne(@Param('id') id: string) {
    return this.photoService.delete(id);
  }

  @Patch('/:id')
  update(@Body() body: UpdatePhotoDto, id: string) {
    return this.photoService.updateOne(id, body);
  }
}
