import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // name
  @Column()
  name: string;

  // 相册
  @Column('simple-array')
  album: string[];
}
 