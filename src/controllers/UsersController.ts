import { Request, Response } from "express";
import { container } from 'tsyringe';

import CreateUserService from "../services/CreateUserService";

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { username, email, password, credits } = request.body;

        const createUser = container.resolve(CreateUserService);

        const user = await createUser.execute({ username, email, password, credits });

        return response.json(user);
    }
}