import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { ExtrasModule } from 'src/extras/extras.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), ExtrasModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
