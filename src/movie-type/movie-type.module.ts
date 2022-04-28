import { Module } from '@nestjs/common';
import { MovieTypeService } from './movie-type.service';
import { MovieTypeController } from './movie-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieType } from './entities/movie-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieType])],
  controllers: [MovieTypeController],
  providers: [MovieTypeService],
})
export class MovieTypeModule {}
