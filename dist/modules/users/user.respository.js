import { CoreDataSource } from '../../core/database.js';
import { User } from './entity/user.entity.js';
export const userRepository = CoreDataSource.getRepository(User);
