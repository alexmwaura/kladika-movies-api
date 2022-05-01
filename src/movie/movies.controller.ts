import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMoviesDto } from './dto/create-movies.dto';
import { UpdateMoviesDto } from './dto/update-movies.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(AuthenticatedGuard)
  @ApiCreatedResponse({ description: 'Add Movie information about a movie' })
  @ApiBody({ type: CreateMoviesDto })
  @Post()
  async create(@Body() CreateMoviesDto: CreateMoviesDto) {
    try {
      const createMovie = await this.moviesService.create(CreateMoviesDto);
      return createMovie;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  @ApiOkResponse({ description: 'Fetch movies' })
  async findAll() {
    try {
      const query = await this.moviesService.findAll().then((movies) => {
        const moviesData = [];
        movies.map((extras) => {
          const { id, title, type, popularity, maxAge, releaseDate, genre } =
            extras;
          const results = {
            id,
            title,
            type,
            popularity,
            maxAge,
            releaseDate,
            genre: {
              genreId: genre.id,
              genre: genre.genre,
            },
          };
          moviesData.push(results);
        });
        return moviesData;
      });
      return query;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const movie = await this.moviesService.findOne(id);
      return movie;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @ApiBody({ type: UpdateMoviesDto })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateMoviesDto: UpdateMoviesDto,
  ) {
    try {
      const movie = await this.moviesService.update(id, UpdateMoviesDto);
      return movie;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.moviesService.remove(id);
      return HttpStatus.OK;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
