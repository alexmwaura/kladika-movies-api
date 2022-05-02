import { Movie } from 'src/movie/entities/movies.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'client_name',
    type: 'varchar',
    nullable: false,
  })
  client_name: string;

  @Column({
    name: 'rental_fee',
    type: 'int',
    nullable: false,
  })
  rental_fee: number;

  @Column({
    name: 'movieId',
    type: 'uuid',
    nullable: false,
  })
  movieId: string;

  @ManyToOne(() => Movie, (movie) => movie.rentals, {
    eager: false,
    onDelete: 'CASCADE',
  })
  movie: Movie;
}
