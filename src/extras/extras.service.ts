import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExtrasDto } from './dto/create-extras.dto';
import { UpdateExtrasDto } from './dto/update-extras.dto';
import { Extras } from './entities/extras.entity';

@Injectable()
export class ExtrasService {
  constructor(
    @InjectRepository(Extras)
    private extrasRepository: Repository<Extras>,
  ) {}

  create(createExtras: CreateExtrasDto): Promise<Extras> {
    const typeOfMovie = this.extrasRepository.create(createExtras);
    return this.extrasRepository.save(typeOfMovie);
  }

  findAll(): Promise<Extras[]> {
    return this.extrasRepository.find({ relations: ['genre'] });
  }

  findOne(id: string) {
    return this.extrasRepository.findOne(id);
  }

  async update(id: string, updateExtrasDto: UpdateExtrasDto): Promise<Extras> {
    const extras = await this.extrasRepository.preload({
      id: id,
      ...updateExtrasDto,
    });
    if (!extras) {
      throw new NotFoundException(`Type of Movie ${id} not found`);
    }
    return this.extrasRepository.save(extras);
  }

  async remove(id: string) {
    const Extras = await this.findOne(id);
    return this.extrasRepository.remove(Extras);
  }
}
