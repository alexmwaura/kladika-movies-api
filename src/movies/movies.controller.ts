import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(AuthenticatedGuard)
  @Post()
  @ApiCreatedResponse({ description: 'Add new movie' })
  @ApiBody({ type: CreateMovieDto })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Fetch Movies' })
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
