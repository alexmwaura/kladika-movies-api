import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { UsersDto } from './users/users.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: UsersDto })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(@Request() req): any {
    return { msg: 'Logged in!' };
  }
}
