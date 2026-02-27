import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  fecha_inicio: Date;

  @Column()
  fecha_fin: Date;
}