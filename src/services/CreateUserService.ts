import { injectable, inject } from 'tsyringe';
import IUsersRepository from "../repositories/models/IUsersRepository";

import User from "../models/User";

interface Request {
    username: string;
    password: string;
    email: string;
    credits?: number;
}

@injectable()
export default class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute({ username, email, password, credits }: Request): Promise<User> {
        if (!credits) {
            credits = 0;
        }

        const user = await this.usersRepository.create({ username, email, password, credits });

        return user;
    }
}