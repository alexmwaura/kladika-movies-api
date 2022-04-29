import { Extras } from 'src/extras/entities/extras.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MovieGenre } from 'src/enums/enums';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'genre',
    type: 'varchar',
    nullable: false,
    enum: MovieGenre,
  })
  genre: MovieGenre[];

  @OneToMany(() => Extras, (extras) => extras.genre, {
    eager: true,
    onDelete: 'CASCADE',
  })
  movies: Extras[];
}
