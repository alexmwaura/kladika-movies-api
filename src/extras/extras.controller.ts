import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ExtrasService } from './extras.service';
import { CreateExtrasDto } from './dto/create-extras.dto';
import { UpdateExtrasDto } from './dto/update-extras.dto';
import { Roles } from 'src/roles.decorator';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('extras')
export class ExtrasController {
  constructor(private readonly extrasService: ExtrasService) {}

  @UseGuards(AuthenticatedGuard)
  @ApiCreatedResponse({ description: 'Add Extra information about a movie' })
  @ApiBody({ type: CreateExtrasDto })
  @Post()
  create(@Body() createExtrasDto: CreateExtrasDto) {
    return this.extrasService.create(createExtrasDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  @ApiOkResponse({ description: 'Fetch extras' })
  findAll() {
    const moviesExtras = this.extrasService.findAll();
    return moviesExtras;
  }

  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extrasService.findOne(id);
  }

  @UseGuards(AuthenticatedGuard)
  @ApiBody({ type: UpdateExtrasDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExtrasDto: UpdateExtrasDto) {
    return this.extrasService.update(id, updateExtrasDto);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.extrasService.remove(id);
  }
}
