import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

  async create(data: any): Promise<Photo> {
    return this.photoRepository.save(data);
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async delete(data: any): Promise<any> {
    return this.photoRepository.delete(data.id);
  }

  async findOne(data: any): Promise<any> {
    return this.photoRepository.delete(data.id);
  }

  async updateOne(id: any, data: any): Promise<any> {
    const result = await this.photoRepository.findOne(id);
    if (!result) {
      return null;
    }
    Object.assign(result, data);
    return this.photoRepository.save(result);
  }
}
