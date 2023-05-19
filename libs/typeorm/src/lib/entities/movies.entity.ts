import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { CountriesEntity } from './countries.entity';
import { GenresEntity } from './genres.entity';
import { AwardsEntity } from './awards.entity';
import { CommentsEntity } from './comments.entity';
import { MoviesPersonsRolesEntity } from './movies-persons-roles.entity';

@Entity('Movies')
@Unique(['title', 'orig_title', 'production_year'])
export class MoviesEntity {
  @PrimaryGeneratedColumn()
  movie_id: number;

  @Column()
  title: string;

  @Column()
  orig_title: string;

  @Column()
  production_year: Date;

  @Column()
  tagline: string;

  @Column()
  budget: number;

  @Column({ nullable: true })
  marketing: number;

  @Column('date')
  dvd_release: Date;

  @Column('date')
  blueray_release: Date;

  @Column('int2')
  age_limit: number;

  @Column()
  mpaa_rating: string;

  @Column('int2')
  duration_min: number;

  @Column()
  film_description: string;

  @Column({ default: false })
  is_serial: boolean;

  @Column({ default: false })
  is_eng: boolean;

  @OneToMany(() => AwardsEntity, (award) => award.movie)
  @JoinTable()
  awards: AwardsEntity[];

  @ManyToMany(() => GenresEntity)
  @JoinTable()
  genres: GenresEntity[];

  @ManyToOne(() => CountriesEntity, (country) => country.movies)
  @JoinColumn({ name: 'country_id' })
  country: CountriesEntity;

  @OneToMany(() => CommentsEntity, (comment) => comment.movie)
  @JoinTable()
  comments: CommentsEntity[];

  @OneToMany(() => MoviesPersonsRolesEntity, (moviesPersonsRole) => moviesPersonsRole.movie)
  moviesPersonsRole: MoviesPersonsRolesEntity[];
}
