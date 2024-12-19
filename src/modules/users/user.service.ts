import { userRepository } from './user.respository';

export const getUserByEmail = async ({
  email,
}: {
  email: string;
}): Promise<any> => {
  return userRepository.findOne({
    where: { email },
  });
};

export const createUser = async ({
  name,
  email,
  password,
  phone,
  avatar,
}: {
  name: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: string;
}): Promise<any> => {
  return userRepository.save({
    name,
    email,
    password,
    phone,
    avatar,
  });
};
