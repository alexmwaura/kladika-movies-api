import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieTypeDto } from './dto/create-movie-type.dto';
import { UpdateMovieTypeDto } from './dto/update-movie-type.dto';
import { MovieType } from './entities/movie-type.entity';

@Injectable()
export class MovieTypeService {
  constructor(
    @InjectRepository(MovieType)
    private movieTypeRepository: Repository<MovieType>,
  ) {}

  create(createMovieType: CreateMovieTypeDto): Promise<MovieType> {
    const typeOfMovie = this.movieTypeRepository.create(createMovieType);
    return this.movieTypeRepository.save(typeOfMovie);
  }

  findAll(): Promise<MovieType[]> {
    return this.movieTypeRepository.find();
  }

  findOne(id: string) {
    return this.movieTypeRepository.findOne(id);
  }

  async update(
    id: string,
    updateMovieTypeDto: UpdateMovieTypeDto,
  ): Promise<MovieType> {
    const movieType = await this.movieTypeRepository.preload({
      id: id,
      ...updateMovieTypeDto,
    });
    if (!movieType) {
      throw new NotFoundException(`Type of Movie ${id} not found`);
    }
    return this.movieTypeRepository.save(movieType);
  }

  async remove(id: string) {
    const movieType = await this.findOne(id);
    return this.movieTypeRepository.remove(movieType);
  }
}
