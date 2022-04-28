import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UsersDto {
  @IsString()
  @ApiProperty({ type: String, description: 'username', example: 'admin' })
  username: string;

  @IsString()
  @ApiProperty({ type: String, description: 'password', example: 'admin' })
  password: string;
}
