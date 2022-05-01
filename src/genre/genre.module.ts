import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entities/genre.entity';
import { MoviesModule } from 'src/movie/movies.module';

@Module({
  imports: [TypeOrmModule.forFeature([Genre]), MoviesModule],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
