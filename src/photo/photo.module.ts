import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { photoProviders } from './photo.provider';
import { PhotoService } from './photo.service';

@Module({
  imports: [DatabaseModule],
  providers: [...photoProviders, PhotoService],
})
export class PhotoModule {}
