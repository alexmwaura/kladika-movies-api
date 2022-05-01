import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMoviesDto } from './dto/create-movies.dto';
import { UpdateMoviesDto } from './dto/update-movies.dto';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  create(createMovie: CreateMoviesDto): Promise<Movie> {
    const typeOfMovie = this.movieRepository.create(createMovie);
    return this.movieRepository.save(typeOfMovie);
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find({ relations: ['genre'] });
  }

  findOne(id: string) {
    return this.movieRepository.findOne(id);
  }

  async update(id: string, UpdateMoviesDto: UpdateMoviesDto): Promise<Movie> {
    const Movie = await this.movieRepository.preload({
      id: id,
      ...UpdateMoviesDto,
    });
    if (!Movie) {
      throw new NotFoundException(`Type of Movie ${id} not found`);
    }
    return this.movieRepository.save(Movie);
  }

  async remove(id: string) {
    const Movie = await this.findOne(id);
    return this.movieRepository.remove(Movie);
  }
}
