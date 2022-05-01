import { PartialType } from '@nestjs/mapped-types';
import { CreateGenreDto } from './create-genre.dto';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MovieGenre } from 'src/enums/enums';

export class UpdateGenreDto extends PartialType(CreateGenreDto) {
  @IsNotEmpty()
  @IsEnum(MovieGenre)
  @ApiProperty({
    enum: MovieGenre,
    isArray: true,
    example: [MovieGenre.Action, MovieGenre.Comedy],
    description: 'genre',
  })
  genre: MovieGenre[];
}
