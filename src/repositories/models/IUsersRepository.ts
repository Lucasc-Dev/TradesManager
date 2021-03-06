import User from "../../models/User";

import ICreateUserDTO from "../../dtos/ICreateUserDTO";

export default interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    save(User: User): Promise<void>;
}