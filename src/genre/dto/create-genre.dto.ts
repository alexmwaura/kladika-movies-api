import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { MovieGenre } from 'src/enums/enums';

export class CreateGenreDto {
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
