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
import { ExtrasService } from './extras.service';
import { CreateExtrasDto } from './dto/create-extras.dto';
import { UpdateExtrasDto } from './dto/update-extras.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('movies')
export class ExtrasController {
  constructor(private readonly extrasService: ExtrasService) {}

  @UseGuards(AuthenticatedGuard)
  @ApiCreatedResponse({ description: 'Add Movie information about a movie' })
  @ApiBody({ type: CreateExtrasDto })
  @Post()
  async create(@Body() createExtrasDto: CreateExtrasDto) {
    try {
      const createMovie = await this.extrasService.create(createExtrasDto);
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
      const query = await this.extrasService.findAll().then((movies) => {
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
      const movie = await this.extrasService.findOne(id);
      return movie;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @ApiBody({ type: UpdateExtrasDto })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExtrasDto: UpdateExtrasDto,
  ) {
    try {
      const movie = await this.extrasService.update(id, updateExtrasDto);
      return movie;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.extrasService.remove(id);
      return HttpStatus.OK;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
