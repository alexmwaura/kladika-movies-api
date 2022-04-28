import { MovieType } from 'src/movie-type/entities/movie-type.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

enum MovieGenre {
  Action = 'Action',
  Drama = 'Drama',
  Romance = 'Romance',
  Comedy = 'Comedy',
  Horror = 'Horror',
}

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', type: 'varchar', nullable: false })
  title: string;

  @Column({
    name: 'genre',
    type: 'varchar',
    nullable: false,
    enum: MovieGenre,
  })
  genre: MovieGenre[];

  @Column({
    name: 'popularity',
    type: 'real',
    nullable: true,
  })
  popularity: string;

  @OneToOne(() => MovieType, (movieType) => movieType.movie, {
    eager: true,
    onDelete: 'CASCADE',
  })
  extras: MovieType;
}
