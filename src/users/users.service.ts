import { Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
  private readonly users: UsersDto[] = [
    {
      username: 'admin',
      password: 'admin',
    },
  ];

  async findOne(username: string): Promise<UsersDto | undefined> {
    return this.users.find((user) => user.username == username);
  }
}
