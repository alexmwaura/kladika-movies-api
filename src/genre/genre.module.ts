import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/genre.entity';
import { MoviesModule } from 'src/extras/movies.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), MoviesModule],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
