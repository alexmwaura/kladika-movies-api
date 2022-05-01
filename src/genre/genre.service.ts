import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateMovieDto } from './dto/update-genre.dto';
import { Movie } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async create(movie: CreateGenreDto): Promise<Movie> {
    const createMovie = this.movieRepository.create(movie);
    return this.movieRepository.save(createMovie);
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find({ relations: ['movies'] });
  }

  findOne(id: string) {
    return this.movieRepository.findOne(id);
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.movieRepository.preload({
      id: id,
      ...updateMovieDto,
    });
    if (!movie) {
      throw new NotFoundException(`MOVIE ${id} not found`);
    }
    return this.movieRepository.save(movie);
  }

  async remove(id: string) {
    const movie = await this.findOne(id);
    return this.movieRepository.remove(movie);
  }
}
