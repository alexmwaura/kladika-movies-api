import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum MovieGenre {
  Action = 'Action',
  Drama = 'Drama',
  Romance = 'Romance',
  Comedy = 'Comedy',
  Horror = 'Horror',
}

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'title' })
  title: string;

  @IsNotEmpty()
  @IsEnum(MovieGenre)
  @ApiProperty({
    enum: MovieGenre,
    isArray: true,
    example: [MovieGenre.Action, MovieGenre.Comedy],
    description: 'genre',
  })
  genre: MovieGenre[];

  @IsString()
  @ApiProperty({ type: Number, description: 'popularity' })
  popularity: string;
}
