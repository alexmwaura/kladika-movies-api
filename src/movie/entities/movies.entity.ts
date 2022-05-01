import { Genre } from 'src/genre/entities/genre.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TypesOfMovies } from 'src/enums/enums';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'title',
    type: 'varchar',
    nullable: false,
  })
  title: string;

  @Column({
    name: 'type',
    type: 'varchar',
    nullable: false,
    enum: TypesOfMovies,
  })
  type: TypesOfMovies[];

  @Column({
    name: 'popularity',
    type: 'real',
    nullable: true,
  })
  popularity: string;

  @Column({ name: 'maxAge', type: 'int', nullable: false })
  maxAge: number;

  @Column({ name: 'releaseDate', type: 'timestamptz' })
  releaseDate: Date;

  @Column({ name: 'genreId', type: 'uuid', nullable: false })
  genreId: string;

  @ManyToOne(() => Genre, (genre) => genre.movies, {
    eager: false,
    onDelete: 'CASCADE',
  })
  genre: Movie;
}
