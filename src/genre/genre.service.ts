import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private GenreRepository: Repository<Genre>,
  ) {}

  async create(Genre: CreateGenreDto): Promise<Genre> {
    const createGenre = this.GenreRepository.create(Genre);
    return this.GenreRepository.save(createGenre);
  }

  findAll(): Promise<Genre[]> {
    return this.GenreRepository.find({ relations: ['movies'] });
  }

  findOne(id: string) {
    return this.GenreRepository.findOne(id);
  }

  async update(id: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    const Genre = await this.GenreRepository.preload({
      id: id,
      ...updateGenreDto,
    });
    if (!Genre) {
      throw new NotFoundException(`Genre ${id} not found`);
    }
    return this.GenreRepository.save(Genre);
  }

  async remove(id: string) {
    const Genre = await this.findOne(id);
    return this.GenreRepository.remove(Genre);
  }
}
