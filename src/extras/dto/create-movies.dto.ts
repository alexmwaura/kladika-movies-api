import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { TypesOfMovies } from 'src/enums/enums';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMoviesDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Movie titie',
    example: 'John Wick',
  })
  title: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'Minimum Age requirements',
    example: 18,
  })
  maxAge: number;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    type: Date,
    description: 'Release Date of the movie',
    example: 'January 10, 2023',
  })
  releaseDate: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Unique movie id',
    example: '44f22539-4d69-4798-b394-312d2169cc05',
  })
  genreId: string;

  @IsNotEmpty()
  @IsEnum(TypesOfMovies)
  @ApiProperty({
    enum: TypesOfMovies,
    isArray: true,
    example: [
      TypesOfMovies.Kids,
      TypesOfMovies.NewRelease,
      TypesOfMovies.Regular,
    ],
    description: 'genre',
  })
  type: TypesOfMovies[];

  @IsNumber()
  @ApiProperty({ type: Number, description: 'popularity' })
  popularity: string;
}
