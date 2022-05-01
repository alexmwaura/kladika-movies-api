import { PartialType } from '@nestjs/mapped-types';
import { CreateGenreDto } from './create-genre.dto';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GenreEnum } from 'src/enums/enums';

export class UpdateGenreDto extends PartialType(CreateGenreDto) {
  @IsNotEmpty()
  @IsEnum(GenreEnum)
  @ApiProperty({
    enum: GenreEnum,
    isArray: true,
    example: [GenreEnum.Action, GenreEnum.Comedy],
    description: 'genre',
  })
  genre: GenreEnum[];
}
