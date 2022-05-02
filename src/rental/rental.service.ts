import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRentalDto } from './dto/create-rental.dto';
import { UpdateRentalDto } from './dto/update-rental.dto';
import { Rental } from './entities/rental.entity';

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
  ) {}
  create(createRentalDto: CreateRentalDto): Promise<Rental> {
    const rentMovie = this.rentalRepository.create(createRentalDto);
    return this.rentalRepository.save(rentMovie);
  }

  findAll(): Promise<Rental[]> {
    return this.rentalRepository.find({ relations: ['movie'] });
  }

  findOne(id: string) {
    return this.rentalRepository.findOne(id);
  }

  async update(id: string, updateRentalDto: UpdateRentalDto): Promise<Rental> {
    const rental = await this.rentalRepository.preload({
      id: id,
      ...updateRentalDto,
    });
    if (!rental) {
      throw new NotFoundException(`Type of rental ${id} not found`);
    }
    return this.rentalRepository.save(rental);
  }

  async remove(id: string) {
    const rental = await this.findOne(id);
    return this.rentalRepository.remove(rental);
  }
}
