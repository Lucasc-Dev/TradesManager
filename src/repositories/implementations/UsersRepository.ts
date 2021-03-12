import { getRepository, Repository } from "typeorm";

import IUsersRepository from "../models/IUsersRepository";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";

import User from "../../models/User";

export default class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async create(data: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create(data);

        await this.ormRepository.save(user);

        return user;
    }

    public async save(user: User): Promise<void> {
        this.ormRepository.save(user);
    }
}