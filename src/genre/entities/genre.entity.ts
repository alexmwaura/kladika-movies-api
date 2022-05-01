import { Movie } from 'src/movie/entities/movies.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { GenreEnum } from 'src/enums/enums';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'genre',
    type: 'varchar',
    nullable: false,
    enum: GenreEnum,
  })
  genre: GenreEnum[];

  @OneToMany(() => Movie, (movie) => movie.genre, {
    eager: true,
    onDelete: 'CASCADE',
  })
  movies: Movie[];
}
