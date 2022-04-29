import { Module } from '@nestjs/common';
import { ExtrasService } from './extras.service';
import { ExtrasController } from './extras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Extras } from './entities/extras.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Extras])],
  controllers: [ExtrasController],
  providers: [ExtrasService],
})
export class ExtrasModule {}
