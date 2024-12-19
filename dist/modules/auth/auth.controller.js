import { BadRequestException } from '../../core/http-exception.js';
import { CoreReturn } from '../../core/constant.js';
import { createUser, getUserByEmail } from '../users/user.service.js';
export const registerController = async (req, res, next) => {
    const userExisted = await getUserByEmail({
        email: req.body.email,
    });
    console.log('userExisted', userExisted);
    if (userExisted) {
        throw new BadRequestException('Email is already existed', {});
    }
    //Create user
    const user = await createUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        avatar: req.body.avatar,
    });
    return res.json(CoreReturn({
        status: 200,
        message: 'Register successfully',
        data: { user },
    }));
};
