import { userRepository } from './user.respository.js';
export const getUserByEmail = async ({ email, }) => {
    return userRepository.findOne({
        where: { email },
    });
};
export const createUser = async ({ name, email, password, phone, avatar, }) => {
    return userRepository.save({
        name,
        email,
        password,
        phone,
        avatar,
    });
};
