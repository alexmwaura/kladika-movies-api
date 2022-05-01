import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { GenreEnum } from 'src/enums/enums';

export class CreateGenreDto {
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
