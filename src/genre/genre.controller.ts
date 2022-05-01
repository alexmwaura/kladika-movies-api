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
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @UseGuards(AuthenticatedGuard)
  @Post()
  @ApiCreatedResponse({ description: 'Add type of genre' })
  @ApiBody({ type: CreateGenreDto })
  async create(@Body() CreateGenreDto: CreateGenreDto) {
    try {
      const genre = await this.genreService.create(CreateGenreDto);
      return genre;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  @ApiOkResponse({ description: 'Fetch genre' })
  async findAll() {
    try {
      const genres = await this.genreService.findAll();
      return genres;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const genre = await this.genreService.findOne(id);
      return genre;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ) {
    try {
      const genre = await this.genreService.update(id, updateGenreDto);
      return genre;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.genreService.remove(id);
      return HttpStatus.OK;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
