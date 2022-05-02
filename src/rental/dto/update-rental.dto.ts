import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsUUID, IsString } from 'class-validator';
import { CreateRentalDto } from './create-rental.dto';

export class UpdateRentalDto extends PartialType(CreateRentalDto) {
  @IsNumber()
  @ApiProperty({
    type: Number,
    description: 'Rent fee for the move',
  })
  rental_fee: number;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Name of the client to rent the movie',
  })
  client_name: string;

  @IsUUID()
  @ApiProperty({
    type: String,
    description: 'Unique movie id',
    example: '44f22539-4d69-4798-b394-312d2169cc05',
  })
  movieId: string;
}
