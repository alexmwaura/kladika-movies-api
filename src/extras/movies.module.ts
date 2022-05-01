import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Extras } from './entities/movies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Extras])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
