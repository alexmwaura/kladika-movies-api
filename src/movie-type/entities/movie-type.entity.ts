import { Movie } from 'src/movies/entities/movie.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

enum TypesOfMovies {
  'Regular',
  "Children's Movie",
  'New Release',
}

@Entity()
export class MovieType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'type',
    type: 'varchar',
    nullable: false,
    enum: TypesOfMovies,
  })
  type: TypesOfMovies;

  @Column({ name: 'maxAge', type: 'int', nullable: false })
  maxAge: number;

  @Column({ name: 'releaseDate', type: 'timestamptz' })
  releaseDate: Date;

  @Column({ name: 'movieId', type: 'uuid', nullable: false })
  movieId: string;

  @ManyToOne(() => Movie, (movie) => movie.extras, {
    eager: false,
    onDelete: 'CASCADE',
  })
  movie: Movie;
}
