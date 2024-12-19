import { _BaseEntity } from '@/core/base.entity';
import { CoreDataSource } from '@/core/database';
import { Entity, Column } from 'typeorm';

export const USER_MODEL = 'users';

@Entity(USER_MODEL)
export class User extends _BaseEntity {
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  role: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
