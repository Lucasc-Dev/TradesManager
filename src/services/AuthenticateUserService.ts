import { injectable, inject } from 'tsyringe';

import authConfig from '../configs/auth';

import IHashProvider from '../container/HashProvider/models/IHashProvider';
import IUsersRepository from "../repositories/models/IUsersRepository";
import ITokenProvider from '../container/TokenProvider/models/ITokenProvider';

import User from '../models/User';

interface Request {
    email?: string;
    username?: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

@injectable()
export default class AuthenticateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,

        @inject('TokenProvider')
        private tokenProvider: ITokenProvider,
    ) {}

    public async execute({ email, username, password }: Request): Promise<Response> {
        let user;

        if (username) {
            user = await this.usersRepository.findByUsername(username);
        }else 
        if (email) {
            user = await this.usersRepository.findByEmail(email);
        }

        if (!user) {
            throw new Error('Wrong email/password combination.');
        }

        const comparePassword = await this.hashProvider.compareHash(password, user.password);

        if (!comparePassword) {
            throw new Error('Wrong email/password combination.');
        }
        
        const { secret, expiresIn } = authConfig.jwt;

        const token = await this.tokenProvider.generateToken({ 
            subject: user.id,
            secret,
            expiresIn,
        });

        return { user, token };
    }
}