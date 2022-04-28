import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

enum TypesOfMovies {
  'Regular',
  "Children's Movie",
  'New Release',
}

export class CreateMovieTypeDto {
  @IsNumber()
  @IsNotEmpty()
  maxAge: number;

  @IsDate()
  @IsNotEmpty()
  releaseDate: Date;

  @IsString()
  @IsNotEmpty()
  movieId: string;

  @IsNotEmpty()
  @IsEnum(TypesOfMovies)
  type: TypesOfMovies;
}
