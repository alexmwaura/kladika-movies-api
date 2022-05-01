import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMoviesDto } from './dto/create-movies.dto';
import { UpdateMoviesDto } from './dto/update-movies.dto';
import { Extras } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Extras)
    private extrasRepository: Repository<Extras>,
  ) {}

  create(createExtras: CreateMoviesDto): Promise<Extras> {
    const typeOfMovie = this.extrasRepository.create(createExtras);
    return this.extrasRepository.save(typeOfMovie);
  }

  findAll(): Promise<Extras[]> {
    return this.extrasRepository.find({ relations: ['genre'] });
  }

  findOne(id: string) {
    return this.extrasRepository.findOne(id);
  }

  async update(id: string, UpdateMoviesDto: UpdateMoviesDto): Promise<Extras> {
    const extras = await this.extrasRepository.preload({
      id: id,
      ...UpdateMoviesDto,
    });
    if (!extras) {
      throw new NotFoundException(`Type of Movie ${id} not found`);
    }
    return this.extrasRepository.save(extras);
  }

  async remove(id: string) {
    const Extras = await this.findOne(id);
    return this.extrasRepository.remove(Extras);
  }
}
