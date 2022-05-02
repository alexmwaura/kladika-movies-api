import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RentalService } from './rental.service';
import { CreateRentalDto } from './dto/create-rental.dto';
import { UpdateRentalDto } from './dto/update-rental.dto';
import { MoviesService } from 'src/movie/movies.service';

@Controller('rental')
export class RentalController {
  constructor(
    private readonly rentalService: RentalService,
    private readonly moviesService: MoviesService,
  ) {}

  @Post()
  async create(@Body() createRentalDto: CreateRentalDto) {
    try {
      const { movieId } = createRentalDto;
      const movieExists = await this.moviesService.findOne(movieId);
      if (!movieExists) {
        throw new HttpException('Movie does not exist', HttpStatus.OK);
      }
      return this.rentalService.create(createRentalDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll() {
    return this.rentalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalDto: UpdateRentalDto) {
    return this.rentalService.update(id, updateRentalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalService.remove(id);
  }
}
