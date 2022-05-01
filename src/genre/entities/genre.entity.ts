import { Movie } from 'src/movie/entities/movies.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MovieGenre } from 'src/enums/enums';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'genre',
    type: 'varchar',
    nullable: false,
    enum: MovieGenre,
  })
  genre: MovieGenre[];

  @OneToMany(() => Genre, (genre) => genre.genre, {
    eager: true,
    onDelete: 'CASCADE',
  })
  movies: Movie[];
}
