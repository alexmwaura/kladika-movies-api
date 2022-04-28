import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MovieTypeService } from './movie-type.service';
import { CreateMovieTypeDto } from './dto/create-movie-type.dto';
import { UpdateMovieTypeDto } from './dto/update-movie-type.dto';
import { Roles } from 'src/roles.decorator';

@Controller('movie-type')
export class MovieTypeController {
  constructor(private readonly movieTypeService: MovieTypeService) {}

  @Post()
  @Roles('admin')
  create(@Body() createMovieTypeDto: CreateMovieTypeDto) {
    return this.movieTypeService.create(createMovieTypeDto);
  }

  @Get()
  findAll() {
    return this.movieTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieTypeService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin')
  update(
    @Param('id') id: string,
    @Body() updateMovieTypeDto: UpdateMovieTypeDto,
  ) {
    return this.movieTypeService.update(id, updateMovieTypeDto);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.movieTypeService.remove(id);
  }
}
