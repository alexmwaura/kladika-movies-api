import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateRentalDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    description: 'Rent fee for the move',
  })
  rental_fee: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Name of the client to rent the movie',
  })
  client_name: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    type: String,
    description: 'Unique movie id',
    example: '44f22539-4d69-4798-b394-312d2169cc05',
  })
  movieId: string;
}
