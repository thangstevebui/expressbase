import { CoreDataSource } from '@/core/database';
import { User } from './entity/user.entity';

export const userRepository = CoreDataSource.getRepository(User);
