import { Module } from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentalController } from './rental.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rental } from './entities/rental.entity';
import { MoviesModule } from 'src/movie/movies.module';
// import { MoviesModule } from 'src/movie/movies.module';

@Module({
  imports: [TypeOrmModule.forFeature([Rental]), MoviesModule],
  controllers: [RentalController],
  providers: [RentalService],
})
export class RentalModule {}
